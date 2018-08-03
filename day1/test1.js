// const constraint = 5;
    // 全局, 函数作用域

/*
* 从这一行开始写
* 每一行以*和一个空格开头
*/

/**
 * @param(int)
 * @param(int)
 * @return(int)
 */

 // // var
 /*
 /*
 condition1 || condition2
 */



function doubleAnd(op1, op2) {
    if (op1) {
        return true
    } else {
        if (op2) {
            return true
        } else {
            return false
        }
    }
}

doubleAnd(false, console.log(1))

const array = [1, 3, 5];
for (let attr in array) {
    console.log(typeof attr);
}

// ES6 Object.keys()
console.log(Object.keys(array));

function func() {
    global.a = 1;
    var b = 6;
}
console.log(a);

// window.a
// global.a
{
    {
        {
            {
                let letVar = 'let';
                var varVar = 'var';
            }
            console.log(varVar);
        }

    }
}

array = [1, 2, 3]
for (let index=0; index < array.length; ++index) {
    console.log(index);
}
console.log('index: ', index);
<p>&nbsp;</p>
<h2>第一天</h2>
<h3>IDE Integrade develop environment 集成开发环境</h3>
<p>&nbsp;</p>
<h3>编程语言学习过程</h3>
<ol>
<li>基本语法</li>
<li>高级语法</li>
<li>框架</li>

</ol>
<h3>基本语法</h3>
<ol>
<li><p>变量</p>
</li>
<li><p>数据类型</p>
</li>
<li><p>语句</p>
<ul>
<li>条件语句</li>
<li>循环语句</li>

</ul>
</li>
<li><p>函数</p>
</li>
<li><p>面向对象</p>
</li>
<li><p><strong>io</strong>操作 (input output)</p>
</li>
<li><p>网络编程 http html</p>
</li>
<li><p>GUI  (graphic user interface)图形用户界面</p>
</li>
<li><p>框架 framework</p>
</li>

</ol>
<h3>js的三个组成部分</h3>
<ol>
<li><p>Ecmascript 一套标准 Ecma2018</p>
<ul>
<li>定义各种api</li>
<li>实现有浏览器厂商 firefox , chrome,saf ari,IE,opera,</li>
<li>array.sort()</li>

</ul>
</li>
<li><p>DOM document object model - 文档对象模型</p>
</li>
<li><p>BOM browser object model 浏览器对象模型</p>
</li>

</ol>
<h3>javascript 为什么叫javascript?</h3>
<ol>
<li>蹭java热度</li>
<li>语法很像java</li>

</ol>
<h3>要不要写分号?</h3>
<p>个人意见: 写</p>
<p>vue: 尤雨溪——————不用写</p>
<h3>注释</h3>
<ol>
<li><p>单行注释</p>
<pre><code>// 我是单行注释,我在// 后面有一个空格
const a = 2;

// 说明性放单行
// 定义一个变量
var variable = 7;

// 打印hello world
console.log(&#39;hello&#39;, &#39;world&#39;); // &#39;hello world&#39;

// 注释不要写废话


// const constraint = 5;


/*
* 从这一行开始写
* 每一行以*和一个空格开头
*/

/**
 * @param(int)
 * @param(int)
 * @return(int)
 */
 
 // 多行注释不能嵌套
 
 // 最安全还是单行注释
</code></pre>
<p>&nbsp;</p>
</li>
<li><p>多行注释</p>
</li>
<li><p>文档注释</p>
</li>

</ol>
<h3>运算符</h3>
<ol>
<li> 算术运算符</li>
<li>逻辑运算符</li>

</ol>
<h3>判断数据类型</h3>
<ol>
<li>typeof</li>

</ol>
<h3>定义变量四种方式</h3>
<ol>
<li><p>直接声明</p>
<pre><code>// b不是用var声明的
var a = b =1;
b = 1;
var a = b;

// let 

</code></pre>
<p>&nbsp;</p>
</li>

</ol>
<p>&nbsp;</p>
