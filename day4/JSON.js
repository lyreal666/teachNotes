/*
 * @Author: ytj 
 * @Date: 2018-07-14 21:03:57 
 * @Last Modified by: ytj
 * @Last Modified time: 2018-07-15 10:50:03
 */
const fs = require('fs');


let obj = {
    name: 'ly',
    age: 21,
    grade: 99,
    friendArray: ['jxq', 'fl', 'rbd'],
    func(params) {
        console.log('ES6对象内方法简写, 直接写函数名');
    }
}

// JSON 序列化
let  objJSONStr = JSON.stringify(obj);
fs.writeFileSync('./object.json',objJSONStr ,'utf-8');

// 反序列化
let fileJSONStr = fs.readFileSync('./object.json', 'utf-8');
console.log(JSON.parse(fileJSONStr));
// => { name: 'ly',
//      age: 21,
//      grade: 99,
//      friendArray: [ 'jxq', 'fl', 'rbd' ] }


// 克隆-------------------------------------------
// 方法一
let cloneObj = {};

// 下面这个不叫克隆,它不是深拷贝
// for (let attr in obj) {
//     cloneObj[attr] = obj[attr];
// }
// console.log(cloneObj);

const deepCopy = (obj) => {
    let cloneObj = {};
    for (let attr in obj) {
        if (typeof obj[attr] !== 'object') {
            cloneObj[attr] = obj[attr];
        } else {
            // 如果属性值是对象要递归拷贝
            cloneObj[attr] = deepCopy(obj[attr]);
        }
    }
}



// 方法二 使用json序列化再反序列化
cloneObj = {};
cloneObj = JSON.parse(JSON.stringify(obj));
console.log(cloneObj);
//  =>
//  { name: 'ly',
//   age: 21,
//   grade: 99,
//   friendArray: [ 'jxq', 'fl', 'rbd' ] }