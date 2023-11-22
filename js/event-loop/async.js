function A(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('A');
            resolve();
        }, 1000);
    })
}

function B(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('B');
            resolve();
        }, 1000);
    })
}

function C(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('C');
            resolve();
        }, 100);
    })
}
async function foo(){
    await A();//await会阻塞后续代码的执行，将后续代码推入到微任务队列中
    console.log('D');
    await B();
    await C();
}
foo()