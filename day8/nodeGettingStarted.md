# node

### 学习顺序

1. fs
2. path
3. http
4. async await
5. bluebird
6. mz
7. superagent
8. log4js
9. cheerio
10. faker
11. readline-sync
12. chalk
13. puppeteer

### npm 常用命令

1. npm init 初始化包, 添加package.json, 加上-y参数直接默认配置package.json

2. npm i packageName

   >i 是install的简写
   >
   >末尾加上-S参数即--save,会把包信息添加到package.json的dependencies 里面
   >
   >-D 即--dev,会把包信息添加到package.json的devDependencies里面
   >
   >-g 参数将包下载到全局的node_modules里面,即在任何目录都可以require,但是不建议这样做，除非是一些cli工具

3. npm config list 查看当前npm配置

4. package.json里面的scripts是个好东西,请自行了解

5. npm install     npm 将根据package,json中dependencies中列出的包名全部下载到当前目录的node_modules中,而devDependencies 会被忽略

6. npx scriptName  等同于 调用 node_modules 下面的.bin目录下面的scriptName



### 正确的module写法

```javascript
'usr strict';

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
        func1,
    }
}
```

