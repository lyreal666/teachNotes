/*
 * @Author: ytj 
 * @Date: 2018-08-01 19:28:37 
 * @Last Modified by: ytj
 * @Last Modified time: 2018-08-01 21:41:05
 */


// toString => 返回第一个参数字符串描述
//  console.log('hello world'.toString());
let someObj = {
    name: 'ly'
};

console.log(someObj.toString());
console.log(`${someObj}`);

console.log(someObj);
// 第二个参数
const number = 32;
console.log(number.toString(16)); // 20

// 打印一个字符的码值
// a-z
// 获取a的码值
const aCodePoint = 'a'.codePointAt(0);
let charArray = [];
for (let codePoint = aCodePoint; codePoint < aCodePoint + 25 + 1; ++codePoint) {
    charArray.unshift(String.fromCodePoint(codePoint));
}
console.log(charArray);

// ！
console.log(!new Set([]));
// +, -,*,/,**, =, +=,
const a = 1 > 5 ? 'a' : 3 > 2 ? 'c' : 'd';
console.log('a:', a);

1 + 32 + 3;

if ('     ') {
    console.log('pass');
}


/**
 * 一群学生分组对抗 
 * 不足2人返回null
 * 人数足够多8人一组
 * 最少2组
 * 返回应该分的组数
 * @param studentsCount
 * @returns {*}
 */
let getGroups = studentsCount => {
    if (studentsCount < 2) {
        return null;
    } else if (studentsCount >= 2 && studentsCount <= 16) {
        // 2 <= studentsCount <= 16;
        return 2;
    } else if (studentsCount > 16) {
        return Math.ceil(studentsCount / 8)
    }
};

console.debug(getGroups(1)); // null
console.debug(getGroups(7)); // 2
console.log(getGroups(19)); // 3


// 待处理字符串数组
let data = [
    '*/A19_100.lab',
    '*/A19_101.lab',
    '*/A19_102.lab',
    '*/A19_103.lab',
    '*/A19_104.lab',
    '*/A19_105.lab',
    '*/A19_106.lab',
];


/**
 * 将data数组中每个字符串前后加一个双引号
 * 将data中字符串拼成一个字符串使得其中每个元素占一行
 * @param data
 * @returns {string}
 */
const deal = (someData) => {
    let resultStr = '';
    // for (let index = 0; index < data.length; ++index) {
    //     data[index] = '"' + data[index] + '"';
    // }

    data = someData.map(str => {
        console.log('1:', str);
        // str = '"' + str + '"';
        str = `"${str}"`;
        console.log('2:', str);
        return str
    })
    return resultStr;
};

deal(data);
console.log(data);




// ES5不能用 m=2，用代码改写;
function pow(n, m) {
    // if (arguments[1] === undefined) {
    //     return n * n;
    // } else {
    //     return n ** arguments[1];
    // }

    m = m || 2;
    return n ** m;
};

console.log(pow(2)); // 4
console.log(pow(2, 3)); // 8

// function func() {
//     // console.log('arguments:', arguments);
//     console.log(arguments[0]);
// }

// // func(1, 2);
// // func('b','c', );
// func()

// const someFunc = () => {
//     console.log(arguments);
// };

// someFunc(1, 2);

// console.log(arguments in global);

let boolVar = false;
if (boolVar) {
    boolVar.toString();
}

boolVar && boolVar.toString();

function restFunc(a, b, ...rest) {
    // arguments[1] arguments.length
    console.log(Array.isArray(arguments)); // => false
    console.log("arguments.map:", arguments.map);
    console.log(Array.isArray(rest)); // => true
}

restFunc(1, 2, 3, 4)

// 类数组 
let similarArray = { length: 8 };

// console.log('hello', 'world', 'haha');


/**
* 接受任意个参数
* 打印用空格拼接所有字符串参数构成的字符串
* @param 
*/
const print = (...rest) => {
    // console.log(rest.join(' '));
    console.log(rest.reduce((f, b) => `${f} ${b}`));
}
     
     
     
print('hello', 'world'); // hello world
print('name:', 'ly'); // name: ly

const aObj = {
    name: 'ly',
    age: 4
}

// aObj = {};
aObj.name = 'ddd';

// Array.map forEach reduce filter every some

let http = {
    method: 'GET',
    header: {
        'User-Agent': 'fireFox'
    },
    req: {
      url: 'http://localhost:8080/'
    },
    response: {
        status: 200,
        reason: 'ok',
        text: '<h1>测试成功</h1>'
    }
 };

//  <GET http://localhost:8081/> status: 200
const log = (object) => {
    const { method, req: {url}, response: {status}} = http;
    console.log(`<${ method } ${ url }> status: ${ status }`);
}
log();