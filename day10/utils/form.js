/*
 * @Author: ytj 
 * @Date: 2018-08-03 15:06:49 
 * @Last Modified by: ytj
 * @Last Modified time: 2018-08-05 21:12:51
 */

const cheerio = require('cheerio');
const fs = require('mz/fs');
const path = require('path');


/**
 * 解析表单提交的key-value
 *
 * @param {*} html
 * @returns
 */
const parseForm = (html) => {
    let $ = cheerio.load(html);

    const forms = $('form');
    const parsedForms = [];
    forms.each((index, form) => {
        let parsedForm = {};

        parsedForm.url = $(form).attr('action');
        parsedForm.method = $(form).attr('method');

        parsedForm.body = {};
        let body = parsedForm.body;

        // 处理input
        const usefulInputs = $(form).find('input[name]:not([type=radio]):not([type=checkbox])');
        usefulInputs.each((index, element) => {
            body[$(element).attr('name')] = $(element).attr('value');
        });

        // 处理单选框
        const radios = $(form).find('input[name][type=radio]');
        radios.each((index, radio) => {
            if ($(radio).attr('checked') === 'checked') {
                body[$(radio).attr('name')] = $(radio).attr('value');
            }
        });

        // 处理复选框
        const checkBoxes = $(form).find('input[name][type=checkbox]');
        checkBoxes.each((index, checkBox) => {
            if ($(checkBox).attr('checked') === 'checked') {
                body[$(checkBox).attr('name')] = $(checkBox).attr('value');
            }
        });

        // 处理多选框
        const selects = $(form).find('select[name]');
        selects.each((index, select) => {
            const options = $(select).find('option');
            options.each((index, option) => {
                if ($(option).attr('selected') === 'selected') {
                    body[$('select').attr('name')] = $(option).attr('value')
                }
            })
        });

        parsedForms.push(parsedForm);
    })

    return parsedForms.length === 1 ? parsedForms[0] : parsedForms;
}


if (require.main === module) {
    const test = async () => {
        const htmlFilePath = path.resolve(__dirname, '../common/html/form.html');
    
        const html = await fs.readFile(htmlFilePath, 'utf-8');
        console.log(parseForm(html));
    
    }

    test();
} else {
    module.exports = {
        parseForm
    }
}