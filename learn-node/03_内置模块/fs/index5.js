const fs = require('fs');

// const info = fs.readdirSync('./');//获取文件夹下的所有文件
// console.log(info);

fs.mkdirSync('./test-dir/data/list',{recursive:true});//创建文件夹

fs.rmdirSync('./test-dir',{recursive:true});//删除文件夹

fs.watch('./', { recursive: true }, (eventType, filename) => {
    console.log(`当前文件夹下${eventType}文件变更为 : ${filename}`);
});//监听文件夹的变化
