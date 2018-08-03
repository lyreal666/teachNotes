/**
 * js内置对象之Date
 */

//-------------------------------Date初始化---------------------------------------//
 console.dir(Date);

 const date1 = new Date();
 const date2 = Date();

 console.log('date1:', date1);;
 console.log('date2:', date2);;

 // instance 实例 typeoftypeof
 console.log(date1 instanceof Date); // true
 console.log(date2 instanceof Date); // false
 /**
  * 总结:
  * 不使用new关键字初始化Date,返回的不是Date实例化对象
  */


 //---------------------Date的api--------------------------------//
 let date = new Date();
 console.log(date);
 console.log(date.getMonth());
 console.log(date.getFullYear());
 console.log(date.getDay());


 //--------------------------获取指定的Date对象---------------------------------------//
// var d = new Date();
// var d = new Date(milliseconds);
// var d = new Date(dateString);
// var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
 console.log(new Date(2018, 6, 9, 10, 4, 20, 2 * 1000));
// 7月1 7月2 97 1 1 0000
// timstamp 时间戳 毫秒为单位 120 * 1000 ms => 2min
console.log('本的时间: ', date.toLocaleString()); // 
console.log('标准时间: ', date.toUTCString());

console.log(+new Date());
console.log(typeof (+'12306')) ;

// 谷歌javascript规范: 用单引号和反引号 拼接字符窜用反引号
console.log('hello world');
let hell = 'hello';
let world = 'world';
console.log(hell + world);
console.log(`${hell}${world}`); // 占位符 %d, %s

// console.time
console.time('测试单引号拼接');
while (100 * 0000 * 0000) {
    hell + world;
}
console.timeEnd('测试单引号拼接') // 测试单引号拼接: 0.083ms


console.time('测试模版字符串拼接');
while (100 * 0000 * 0000) {
    `${hell}${world}`
}
console.timeEnd('测试模版字符串拼接') // 测试模版字符串拼接: 0.004ms
// 要在双引号里面打印单引号 "hello" 
console.log('\"hello\"');
// console.log('"hell'o"'); // 报错 SyntaxError: missing ) after argument list

// function checkPhone(str) {
//     if (isNaN(parseInt(str.slice(0, 2)) {
//         return false;
//     }
//     if (str[3] !== ' ') {
//         return false;
//     }
// }


1;
{
    a: 1;
}
'hello';
// ^\d{3}\s\d{8}$


//------------------------创建js 正则表达式对象--------------------------//
// 字面量
let regExp1 = /^\d{3}\s\d{8}$/;
// new RegExp
let regExp2 = new RegExp(/^\d{3}\s\d{8}$/);

// 正则表达式语法
// 位置类
/*
^
$
// 字符类型
// 数字
\d digtal
\s space 空字符 表示空格, tab
\S 非空字符
\w word 字母,数字,_
\u \u4E00-\u9FA5 中文字符
. 任意字符除了\n

// 数量
? 0个或1个
+ 1+
* 任意个, 0个或多个

// 分组
() 把括起来的内容看作整体

// {} 精确表示数量
// 一个数字 {6} 6个 (\w\d){6} {{3,6}}

// [] 之一 [abc] [123344555] 一定是表示一个字符 [a-z1-9A-Z]

*/
// **YY-MM-dd hh-ss-mm**
function nowTimeStr(str) {
    const nowDate = new Date()
    return (str.replace('YYYY', nowDate.getFullYear())
            .replace('MM', nowDate.getMonth())
            .replace('dd', nowDate.getDay())
            .replace('hh', nowDate.getHours())
            .replace('ss', nowDate.getSeconds())
            .replace('mm', nowDate.getMinutes()))
}

console.log(nowTimeStr('**YYYY-MM-dd hh-ss-mm**')); // **2018-07-09 21-05-19"

function formatStr(str) {
    return str.replace(/\s+/g, ' ');
}


// ms google    ti      ibm
console.log(formatStr('ms google    ti      ibm'));

// 匹配 test
console.log(/^\d{3}\s\d{8}$/.test('123 6666666'));

// 替换 replace //, //g

// exec连续匹配

// 拆分 split , ;   , 
console.log('ms,, google; , IBn'.split(/[,;\s]+/));

// search 搜索



