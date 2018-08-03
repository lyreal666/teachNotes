//--------------------------------------------Promise--------------------------------------------//
// ES6
// setTimeout(() => {
//     setTimeout(() => {
//         setTimeout(() => {

//         }, 3000)
//     }, 2000)
// }, 1000)

// func1().func2().func3()
// 怎样使用promise解决回调炼狱

// 先构造promise对象
// promise有三种状态
// 1. unresolved
// 2. resolved
// 3. rejected
let p = new Promise((resolve, reject) => {
    // reject('错误');
    setTimeout(() => {
        console.log('888');
        resolve('abc')
    }, 1000);
});
// 使用

// p.then((data) => console.log(data)).catch(error => console.log(error))
// p.then((date) => {
//     console.log(date);
//     return 666
// }).then((number) => console.log(number));


// Promise.resolve
Promise.resolve(p); // resolved promise
console.log(typeof Promise.resolve(123));

// Promise.all
function createPromise(printedValue) {
    return new Promise((resolve, reject) => {
        // reject('错误');
        setTimeout(() => {
            console.log(printedValue);
            reject('first')
            resolve(printedValue)
        }, 1000);
    })
}

// console.log(Array.from({ length: 8 }).map((ele, index) => index + 1));
// console.log([...new Array(8)].map((ele, index) => index + 1));

// Promise.all(Array.from({ length: 8 }).map((ele, index) => index + 1).map(ele => {
//     return createPromise(ele);
// })).then(array => {
//     console.log(array);
//     console.log('promise.all 执行完了');
// });

// promise.race
// Promise.race(Array.from({ length: 8 }).map((ele, index) => index + 1).map(ele => {
//     return createPromise(ele);
// })).then(() => {
//     return Promise.resolve('abc')
// }).then((p) => {
//     p.
// })

// closer


// closer= > grammer
function closer0(func) {
    var variable = 1;
    function func() {
        console.log(variable);
    }
    func(variable);
    return func
}

// 