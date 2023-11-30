const fs = require('fs'); // Add missing import

//fs读取文件
//promise + then/ async + await 解决方案

const readFilePromise = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename,'utf-8', (err, data) => {
            if(err){
                reject(err)
                return;
            }
            resolve(data)
        })
    })
}


//async + await
// (async function(){
//     try{
//         const f1 = await readFilePromise('./a.txt')
//         const f2 = await readFilePromise('./b.txt') 
//         const f3 = await readFilePromise('./c.txt') 
//         console.log(f1,f2,f3)
//     }
//     catch(e){
//         console.log(e)
//     }
// })()

//promise + then
readFilePromise('./a.txt')
.then(data => {
    console.log(data);
    return readFilePromise('./b.txt');
})
.then(data => {
    console.log(data);
    return readFilePromise('./c.txt');
})
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});
