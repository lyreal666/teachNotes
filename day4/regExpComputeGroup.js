/*
 * @Author: ytj 
 * @Date: 2018-07-14 18:59:20 
 * @Last Modified by: ytj
 * @Last Modified time: 2018-07-15 10:09:40
 */


 // 计算组
 let pattern = /(\*{5})((\d{3})\w(\s{2}))/
// 下标为0的组((\*{5})((\d{3})\w(\s{2})))
// 1 (\*{5})
// 2 ((\d{3})\w(\s{2}))
// 3 (\d{3})
// 4 (\s{2})

// 正则里面的或 ====> |
let datePattern = /\d{2}|\d{4}/;
console.log(datePattern.test('98') && datePattern.test('1998'));

// 正则模式 /regExp/g g(global) i(ignore)  /h/=> /h/ 'HHHHHH'=>'hhhhhhhh'
// m(multiple line) u(unicode) s(dotAll)
// m模式
let multipleMode = /\d{3}\n\d{3}/;
let multipleLineStr = `666
999`;
console.log(multipleMode.test(multipleLineStr)); // true

let multipleMode1 = /666/g;
let multipleLineStr1 = '666\n666';
console.log(multipleLineStr1.replace(multipleMode1, 999));

let dotAllMode = /../;
let dotAllModeStr = '\n\n';
console.log(dotAllMode.test(dotAllModeStr)); // => false

let dotAllMode1 = /../s;
console.log(dotAllMode1.test(dotAllModeStr)); // =< true

let containZHStr = "hello I'm 小明, how are you?";

// 中日朝unicode码值范围4E00－9FA5
// let zhPattern = /.+?([\u4E00-\u9FA5]+).?$/;

// [^\w]
let zhPattern = /([^\u4E00-\u9FA5]+?)([\u4E00-\u9FA5]+)([^\u4E00-\u9FA5]+)/;
console.log(zhPattern.test(containZHStr));
// 用match可以返回组
let matchResult =  containZHStr.match(zhPattern);
// Array.isArray()
console.log(Array(30).fill('-').join(''));
console.log(matchResult);
console.log(Array(30).fill('-').join(''));
console.log(`${matchResult}`);
console.log(Array(30).fill('-').join(''));
console.log(Array.isArray(matchResult)); // => true
console.log('Result:', matchResult[2]);
// \S =>

// ES6属性名的简写
// 对象
let age = 21;
let object = {
    name: 'ly',
    age,
    grade: 99 // => age: age
}
console.log(object);
let objectArray = [
    {name: 'ly', age: 21},
    {name: 'ly', age: 21},
    {name: 'ly', age: 21},
]






