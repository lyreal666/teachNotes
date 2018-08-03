/*
 * @Author: ytj 
 * @Date: 2018-07-22 19:22:52 
 * @Last Modified by: ytj
 * @Last Modified time: 2018-07-22 20:21:05
 */

//  "use strict";

// Math
console.log(Math.random()); // [0, 1)

// 取整
console.log(parseInt(3.14159265457)); // 3
/*
* Math.floor()
* Math.ceil()
* Math.trunc()
* Math.round()
*/

console.log(Math.floor(6.725)); // 6
console.log(Math.ceil(5.1)); // 6
console.log(Math.trunc(+0.6)); // 0
console.log(Math.trunc(-0.6)); // -0
console.log(parseInt(+0.6)); // +0
console.log(parseInt(-0.6)); // -0
console.log(~~8.48); // 8
console.log(~~-8.48) // -8
console.log(Math.round(3.5)); // 4
console.log(Math.round(3.1)); // 3


// 1~10
for (var i = 0, array=[]; i < 10; ++i) {
    array.push(~~(Math.random() * 10 + 1));
}
console.log(`${array}`);

// 
{
    // let a = b = 6;
    let b = 6;
    let a = b;
}
// console.log(a); // ReferenceError: c is not defined
// console.log(b); // 

function func() {
    // var a = b = 8;
}

func();
// console.log(a);
// console.log(b);

// prototype
console.log(Math.max(6, 8, 9, 4, 1, 3 )); // 9
console.log(Math.min(6, 8, 9, 4, 1, 3 )); // 1

let array1 = [3, 1, 2, 9, 10, 4, 9];
console.log(array1.concat(array1));
console.log([...array1, ...array1]);

const swap = (x, y) => {
    const temp = y;
    y = x;
    x = temp;
}

let a = 6, b = 8;
console.log('a:', a, 'b:', b);
swap(a, b);
console.log('a:', a, 'b:', b);

[a, b] = [b, a];
console.log('a:', a, 'b:', b);

// array
/*
queue // 
linkList
stack
*/
let stack = [];
console.log('a:', a, 'b:', b);
stack.push(a, b);
a = stack.pop();
b = stack.pop();
console.log('a:', a, 'b:', b);

console.log(array1); // [ 3, 1, 2, 9, 10, 4, 9 ]
console.log(Math.max(...array1));
// Function.prototype.bind this
// Function.prototype.call (this, ...rest)
// Function.prototype.apply (this, argumentArray)
Math.max.apply(null, array1); // 10




