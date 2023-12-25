const path = require('path');//引入path模块

// console.log(path.join('a','b','c'))
// console.log(path.join(process.cwd(),'model','index'))//获取当前工作目录

// console.log(path.resolve('a','b','c'))//获取当前工作目录

// console.log(path.resolve(__dirname))//获取当前工作目录
//  console.log(path.dirname('/a/b/c'))//返回路径的目录名字


//  console.log(path.basename('/a/b/c.js'))//返回路径的文件名字
// console.log(path.basename(__filename,'.js'))//返回路径的文件名字

// console.log(path.extname(__filename))//返回路径的扩展名字

// console.log(path.normalize(__filename))//将路径格式化成标准的路径

// console.log(path.parse(__filename))//返回路径的对象

console.log('foo/bar/baz'.split(path.sep))//返回路径的对象