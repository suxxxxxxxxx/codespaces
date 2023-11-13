function xq() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('龙哥相亲了！');
            resolve('相亲成功'); // 执行下一个函数
        }, 2000);
    });
}

function marry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('龙哥结婚了！');
            resolve(); // 执行下一个函数
        }, 1500);
    });
}

function baby() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('小龙女出生了！');
            resolve(); // 这是最后一个函数，所以不需要执行下一个函数
        }, 2500);
    });
}

xq().then((res)=>{
    return marry();
    console.log(res);
}
).then((res)=>{
    baby();
}
)
    