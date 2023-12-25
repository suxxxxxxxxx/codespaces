const fs = require('fs');

fs.appendFileSync('./data.txt', '疑是地上霜');//追加内容

// fs.renameSync('./data.txt', './data2.txt');//重命名

// fs.renameSync('./data2.txt', './pic/data.md')//移动文件

// fs.unlinkSync('./pic/data.md')//删除文件

// fs.rmdirSync('pic',{ recursive:true})//删除文件夹