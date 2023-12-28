//文件系统

//同步
// const syncData = fs.readFileSync('./data.txt', { encoding: 'utf8' });
// console.log(syncData);

//异步
// fs.readFile('./data.txt', { encoding: 'utf8' }, (err, data) => {
//     if (!err) {
//         console.log(data);
//     }
// });

// fs.promises.readFile('./data.txt', { encoding: 'utf8' }).then(data => {
//     console.log(data);
// });
const fs = require('fs/promises');
fs.readFile('./data.txt', { encoding: 'utf8' }).then(data => {
    console.log(data);
});