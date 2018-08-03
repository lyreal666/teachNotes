var arr = new Array();
for (var index = 0; index < 10000; index++) {
    length = Math.floor(Math.random() * 5 + 1);
    var str;
    for(var j = 0; j < length; j++) {
        str += String(97 + Math.floor(Math.random() * 26));
    }
    arr.push(str);
}

console.log(`arr create! the length: ${arr.length}`);
for (var k = 1; k < 4 ; ++k) {
    console.log(`第${k}次测试:`)
    console.time('test +');
    var rstr= '';
    for (var i = 0; i < 10000; i++) {
        rstr += arr[i];
    }
    console.log(`resultStr's length is ${rstr.length}`);
    console.timeEnd('test +');

    console.time('test join');
    var rstr = arr.join('')
    console.log(`resultStr's length is ${rstr.length}`);
    console.timeEnd('test join');
}

//
let str1 = 'abc';
let str2 ='def';

let str3 = str1 + str2; // 拼接 => 产生新字符串