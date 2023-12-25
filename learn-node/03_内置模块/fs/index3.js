const fs = require('fs');

// console.log(fs.statSync('./target.md'));

const info = fs.statSync('./target.md');//获取文件的信息

console.log(info.isFile());//判断是否是文件
console.log(info.isDirectory());//判断是否是文件夹
