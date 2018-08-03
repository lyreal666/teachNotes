/*
 * @Author: ytj 
 * @Date: 2018-07-13 19:43:20 
 * @Last Modified by: ytj
 * @Last Modified time: 2018-07-19 20:46:18
 */


 /*
 * 问题:
 * 1. 简写技巧
 */

 // 简写技巧
 let var1;
 if (var1 !== undefined || var1 !== null || var1 !== '') {
     let var2 = var1;
 }

 // => 
 var2 = var1 || 'new'; // 'new'为var1为空时你想赋值的默认值

 // 正则里面的这占位符
 let str = 'ahdlhdkaaaaaaaaaa saclf is cool! asl;akkkkkkkkklk;;;;;;;;;;;ash;aj';

 // 插一个very => clf is very cool!
//  // 1. 找下标
//  let index = str.indexOf('is');
//  // 计算有用的下标
//  index += 'is'.length - 1;
//  // 拼接
//  let resultStr = str.slice(0, index + 1).concat(' very').concat(str.slice(index + 1));
//  console.log(resultStr);

 // 正则
 // js $1, $2 ~9
//  console.log(object);
str = str.replace(/(.+?is)(.+)/, `$1 very $2`);
console.log('regExp: ', str);
 // /(\d{3})\s\w+/ 总共有几个组?
 // 3个组 /((\d{3})\s(\w{5})\.)/
console.log('123456\+146 abcde.'.match(/((\d{3})\s(\w{5})\.)/));

// 命名方式 2种
// camel 驼峰命名法
// let myLoveFriend;

// kebab 烤肉串式 js标识符,数字,字母,$,_ php
// let my-love-friend;
"use strict";
let my_love_friend;

function test() {
    'use strict';
    let newVariable; // 严格模式不能直接声明变量
}
test();

console.log(`  静夜思
床前明月光
疑是地上霜
举头望明月
低头思故乡`);

// str1 指向内存里面的新产生的"I'm a string"
let str1 = "I'm a string";
// str2 指向 str1
let str2 = str1;
console.log('str1:', str1, 'str2:', str2);
str1 = "I'm modified";
console.log('str1:', str1, 'str2:', str2);
str2 = 'modified';

let firmArray = ['IBM', 'Facebook']
let sourceArray = ['Google', 'Micro soft', 'TI'];
// firmArray 插到MS后面
sourceArray.splice(1, 0, ...firmArray); // 返回[]
console.log(sourceArray);

function printf(str, flag) {
    return console.log(str.replace('%d', flag));
}

printf('digtal %d', 666);

// ... 扩展运算符 减速运算符
// rest语法是用来接受
// 在数组和对象字面值里面用就是扩展.
let sourceObj = {
    attr1: 'abc'
};

let newObj = {
    attr2: 'def'
}

// 方法一
// for (let attr in sourceObj) {
//     newObj[attr] = sourceObj[attr];
// }

// ...扩展
newObj = {
    ...newObj,
    ...sourceObj
}

console.dir(newObj);

