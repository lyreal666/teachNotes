//--------------------------------------------异步--------------------------------------------//
function func1() {
    console.log('Call func1!');
}

function func2() {
    console.log('Call func2!');
}

function syncStatement() {
    func1();
    func2();
}

syncStatement();

// 异步距离
// 网络请求
// 文件读写io
// 定时器

function asyncStatement() {
    setTimeout(() => {
        console.log('async');
    }, 1000)
    console.log('async end');
}

asyncStatement();

// javascript 是天生异步的
setTimeout(() => {
    console.log('callBack1');
    setTimeout(() => {
        console.log('callBack2');
    }, 1000)
    console.log('callBack1 end');
}, 1000)

