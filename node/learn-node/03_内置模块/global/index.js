// console.log(globalThis = window)
// global.userInfo = {
//     name: 'Tom',
//     age: 18
// }
// console.log(Oeject.getOwnPropertyNames(global)) 

//__filename  __dirname
// console.log(__filename)
// console.log(__dirname)

//process

// console.log(process.argv)
// console.log(process.cwd());
// console.log(process.env);//环境变量
// console.log(process.pid);//进程id
// console.log(process.platform);
// console.log(process.arch); //读取cpu

// process.stdout.write('hello')//写入数据流
// process.stdout.write(' ')
// process.stderr.write('world')
// process.stderr.write('\n')
process.stdout.write('Are you sure you want to do? ')
process.stdin.on('data', (data) => {//监听用户输入
    console.log(`用户输入了:${data}`);
})

