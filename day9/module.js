const func = () => {
    console.log('func is called');
}

/*
下面的写法可以使得可以直接node运行这个模块文件测试func,又可以在被调用时不执行func;
*/
if (require.main === module) {
    func();
} else {
    module.exports = {
        func,
    }
}
