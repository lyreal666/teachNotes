const fs = require('fs');
const path = require('path');

console.log('前面的代码');
fs.readFile(path.resolve(__dirname, './test.txt'), function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
 });
console.log('后面的代码');

// http://testField/?callback=getProducts&id=666
// <script src="http://testField/?callback=getProducts&id=666"></script>
 /* getProducts({
        id: 666,
        date: '18-7-26'
 })
 */
// function getProducts(products) {
//     window.products - products;
// }

