/*
 * @Author: ytj 
 * @Date: 2018-08-03 19:18:33 
 * @Last Modified by: ytj
 * @Last Modified time: 2018-08-03 22:23:55
 */

const fs = require('fs');
const path = require('path');
 
//  // js 异步
//  console.log('start');
//  setTimeout(() => console.log('callback'), 1000);
//  console.log('end');

//  // 回调炼狱的问题
//  setTimeout(() => {
//      console.log('callback1');
//      let value1 = 1;
//      setTimeout(() => {
//         console.log('callback2');
//         let value2 = 2;
//      }, 1000 )
//  }, 1000)

 // promise
 const promise = new Promise((resolve, reject) => {
     const formHtmlPath = path.resolve(__dirname, '../common/html/form.html');
     fs.readFile(formHtmlPath, (error, data1) => {
         if (!error) {
            resolve(data1);
         } else {
            reject(error)
         }
     })
 });

 const dealData1 = (data1) => {
    console.log('Normal condition:', data1);
    return new Promise((resolve, reject) => {
        const textPath = path.resolve(__dirname, '../common/text/helooworld.txt');
        fs.readFile(textPath, (error, data2) => {
            if (!error) {
               resolve(data2);
            } else {
               reject(error)
            }
        });
    })
 };

 const dealError = (error) => {
     console.error('Occur error:', error)
 }

 const dealData2 = (data2) => {
    console.log(data2);
 }

 promise.then(dealData1).then(dealData2).catch(dealError)
 
 
 let arr = [1, 2, 3, 4, NaN];

 console.log('NaN index:', arr.indexOf(NaN)); // -1
 console.log(arr.findIndex((ele, index) => Object.is(NaN, ele)));

 // promise
// Promise.then(step1).then(step2).then(step3);

// E7 async(异步) await(异步等待)
// await

// 异步函数
async function asyncFunc1() {
    // 使用了async定义函数
    // 内部可以用await
    console.log('asyncFunc1 start...')
    let data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 1000)
    });
    console.log(data)
}

async function asyncFunc2() {
    // 使用了async定义函数
    // 内部可以用await
    console.log('asyncFunc2 start...')    
    let data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 1000)
    });
    console.log(data)
}
// function normalFunc() {
//     await 123;
// }

// await 其实可以接受任何变量， 常用来接受一个pedding promise
// pedding, resolved, rejected
// promise.then().catch()

asyncFunc1();
asyncFunc2();

const fs = require('fs');
const path = require('path');

// __var, _var, __prpto__ private
// console.log('__dirname', __dirname)
// console.log('join:', path.join(__dirname, '../common/helloworld.txt'))
const textPath = path.resolve(__dirname, '../common/helloworld.txt')
const content = fs.readFileSync(textPath, 'utf-8');
console.log(content)
// fs.readFile
const rfPromise = new Promise((resolve, reject) => {
    fs.readFile(textPath, 'utf-8', (error, data) => {
        if (!error) {
            resolve(data)
        } else {
            reject(error)
        }
    });
})

rfPromise.then((content) => {
    console.log(content);
})

const asyncRFFunc = async () => {
    const content = await rfPromise;
    console.log(content);
}

asyncRFFunc();

const myReadFile = (path, options) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, options, (error, data) => {
            if (!error) {
                resolve(data)
            } else {
                reject(error)
            }
        })
    });
}

!async function () {
    await myReadFile(path, options);
}

// fs => mz
// http => superagent
const mzFs = require('mz/fs');
const testMZ = async () => {
    const content = await mzFs.readFile(textPath, 'utf-8');
    console.log('mz:', content)
}

testMZ();
