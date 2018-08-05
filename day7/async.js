

// 同步
// console.log('step1');
// console.log('step2');
// console.log('step3');

// 异步
console.log('step1');
setTimeout(() => console.log('step2'), 1000); 
console.log('step3');

// 异步
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(123)
    }, 1000)
});

const dealFunc = (data) => {
    console.log(data);
}

// 链式调用
promise.then(dealFunc);


// js 有异步
// 假设有10个文件 一个文件耗时30s
console.log('ReadFile1');
console.log('ReadFile2');
console.log('ReadFile3');
console.log('ReadFile4');
console.log('ReadFile5');
console.log('ReadFile6');
console.log('ReadFile7');
console.log('ReadFile8');
console.log('ReadFile9');
console.log('ReadFile10');
// c语言 => 300
// js => 30s

// py3.6 asyncio asynchttp

// await 必须在async 函数
const testAsync = async () => {
    const data = await promise;
    console.log('testAsync:', data);
}

testAsync();



