/*
 * @Author: ytj 
 * @Date: 2018-08-03 14:40:05 
 * @Last Modified by: ytj
 * @Last Modified time: 2018-08-05 22:26:43
 */

// 使用 agent 实例会自动保存cookies
const superagent = require('superagent');
const CONFIG　 = require('../config/config.json');
const { parseForm } = require('../utils/form');
const cheerio = require('cheerio');
const fs = require('mz/fs');
const path = require('path');


/**
 * 登入教务在线页面并保存登入cookies
 *
 * @returns agent(保存了登入cookies的superagent实例)
 */
const login = async () => {
    let requests = superagent.agent();
    const loginUrl = `http://jwc.jxnu.edu.cn/Default_Login.aspx?preurl=`;

    const { text: html} = await requests.get(loginUrl);
    let formBody = parseForm(html).body;
    // console.log(requests.);

    formBody = {
        ...formBody,
        StuNum: CONFIG.ID,
        Password: CONFIG.password,
    };
    
    const { text: loginRes } = await requests
        .post(loginUrl)
        .type('form')
        .set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36')
        .send(formBody);
    
    return requests;
}



/**
 * 爬取成绩单数据,返回处理后的数据
 *
 * @param {*} requests
 * @returns
 */
const crawlTranscript = async (requests) => {
    const transcriptUrl = `http://jwc.jxnu.edu.cn/MyControl/All_Display.aspx?UserControl=xfz_cj.ascx&Action=Personal`;
    let { text: html } = await requests.get(transcriptUrl);
    html = html.replace('charset=gb2312', 'charset=utf-8')
    const htmlOutputPath = path.resolve(__dirname, '../output/transcript.html');
    await fs.writeFile(htmlOutputPath, html, 'utf-8');
    let $ = cheerio.load(html);

    let terms = [];
    let termKey;
    const courseKeys = ['courseNumber', 'courseName', 'studyScore', 'score', '补考', '标准分', '备注'];
    let courseKeysIndex = 0;

    // magic code, don't modify
    const trs = $('#_ctl11_dgContent > tbody > tr').slice(1);
    trs.each((index, tr) => {
        const tds = $(tr).find('td');
        tds.each((index, td) => {
            const font = $(td).find('font');
            if ($(td).attr('valign') === 'middle') {
                termKey = font.text();
                terms.push({
                    term: termKey,
                    courses: []
                })
            } else {
                if (courseKeysIndex === 0) {
                    terms[terms.length - 1].courses.push({
                        [courseKeys[courseKeysIndex++]]: font.text()
                    });
                } else {
                    let lastIndex = terms[terms.length - 1].courses.length - 1;
                    terms[terms.length - 1].courses[lastIndex][courseKeys[courseKeysIndex++]] = font.text();
                }
                
                courseKeysIndex === 7 ? courseKeysIndex = 0 : null;
            }
        })
    })
    
    console.log(JSON.stringify(terms, null, '   '));
    return terms;
}

const main = async () => {
    console.time('Test cost:');
    let requests = await login();
    const terms = await crawlTranscript(requests);
    const termsJsonStr = JSON.stringify(terms, null, '   ');
    console.log(termsJsonStr);
    const outputJsonPath = path.resolve(__dirname, '../output/transcript.json');
    await fs.writeFile(outputJsonPath, termsJsonStr, 'utf-8');
    console.timeEnd('Test cost:')
}


if (require.main === module) {
    main();
} else {
    throw new Error(`程序入口文件: ${ __filename }, 不可以被导入`)
}