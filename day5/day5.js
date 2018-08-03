/*
 * @Author: ytj 
 * @Date: 2018-07-20 19:30:23 
 * @Last Modified by: ytj
 * @Last Modified time: 2018-07-21 08:03:26
 */
"use strict"

// utf-8 \u0000~\uFFFF
// Math.pow()
// ** 求幂运算
console.log(2 ** 16);
console.log(String.fromCodePoint(2 ** 16 +10));;
console.log(String.fromCodePoint(2 ** 16 + 20));;


// console.log('a'.codePointAt(0));

let num = 96;

console.log(num.toString(16));
// let \u0060\u0060 = 7;
// js utf-16 2
// \uB000~\BFFF '\uB0001' // 辅助字符 \u0060\uB0001\uB002
// ES length
let char = String.fromCodePoint(2 ** 16 +5);
console.log('length:', char.length);
console.log([...char].length);
/*
let array = []
for (let char of str) {
    array.push(char);
}
return array.length;
*/

function mySlice(array, start) {
    let resultArray = [];
    for (let index = start; index < array.length; ++index) {
        resultArray.push(array[index])
    }
    return resultArray;
}

// 有length属相对象都是类数组
function func() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(Array.isArray(arguments));
    
    // arguments.slice(0,) ES5
    let argumentsArray =  Array.prototype.slice.call(arguments); // 临时绑定this slice()

    
    // 永久绑定 bind
    console.log('argumentsArray:', argumentsArray);
}

let charArray = ['a', 'b', 'c'];

func(...charArray);

// oop Object Oriented Programming
// 基本概念： 2
// 1. 类 ---- class
// 2. 实例 ---- instance instanceOf 

// ES6 class
// 实例就是对象

/*
struct {
    int a,
    char b
}

class apple {
    name,
    age.
    func() {

    }
}
*/
// class 数据类型的集合 + 方法

// c++ struct class
// oop 基本特性
// 封装, 继承 
let object = {
    _attr: 'ly'
};

class Father {

}

class Son extends Father {

}

// ES没有class
// prototype, __proto__

// ES constructor
function Student() {
    this.name ='ly' ;
}

let stu = new Student();

// prototype绑定在构造函数上
// __proto__ 绑定在实例对象上面

console.log(Student.prototype); // Student {}
console.log(stu.__proto__); // Student {}
console.log(Object.is(stu.__proto__, Student.prototype)); // 

// 如何从实例对象访问原型 =》 
let arr1 = new Array();
console.log(arr1.__proto__ === Array.prototype); // 
console.log(Object.getPrototypeOf(arr1));

// arguments args
function hasManyArguments(argumentObj) {
    console.log(argumentObj.firstArg);
}

hasManyArguments({ firstArg: 'ly' });

// class destructor 解构器
class Person{
    /**
     * 
     * @param {Object} options 
     */
    constructor(options) {
        this.name = options.name;
        this.__ID__ = options.id;
    }

    // 第二种加强封装
    // 访问器和控制器 getter setter
}

class Person1 {
    constructor(options) {
        this.__ID__ = options.id;
        this.name
    }

    getID() {
        console.log('Get id');
        return this.__ID__;
    }

    setID(newID) {
        console.log('Set id');
        this.__ID__ = newID
    }

}

let p1 = new Person1({name: 'ly', id: '11111'});
console.log(p1.getID());

class Person2 {
    constructor(options) {
        this.__ID__ = options.id;
        this.name 
    }

    get ID() {
        console.log('Get id');
        return this.__ID__;
    }

    set ID(newID) {
        console.log('Set id');
        this.__ID__ = newID
    }
}

let p2 = new Person2({name: 'ly', id: '11111'});
console.log(p2.ID);

let oneObj = {
    get name() {
        return 'ly'
    },
    set name(a) {

    }
}
console.log(oneObj.name);

// 
let aObject = Object.create({mySlice}); 
console.log(aObject.hasOwnProperty('mySLice'));
console.log('mySlice' in aObject);


// for (let i = 0; i < 10; ++i) {
//     for (let i = 0; i < 10; ++i) {
//         for (let i = 0; i < 10; ++i) {
//             let flag = false;
//             if (flag = true ) {
//                 console.log('from 4');
//                 break;
//             }
//             for (let i = 0; i < 10; ++i) {
//                 if(condition = true) {
//                     flag = true;
//                     break;
                   
//                 }
//             }
//         }
//     }
// }
