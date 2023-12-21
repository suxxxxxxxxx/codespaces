function add(a, b, c) {
    return a + b + c;
}
//函数的柯里化
function curry(fn) {
    //收集函数 闭包 arr
    //到位了，执行arr.length === fn.length fn(...arr)
    //返回收集参数的函数
    //rest 运算符 argus是数组 闭包空间 自由变量
    //args 
    let judge = (...args) => {
        if (args.length === fn.length) {//退出条件
            return fn(...args);
        }
        return (...argus) => {
            return judge(...args, ...argus);
        }
    }
    return judge;
}
    //有的时候不会一次性给到，前端的交互
    //js curry 柯里化
    //每次接受一个参数
    console.log(add.length);
    // add(1)(2)(3);
    const curryAdd = curry(add);
    curryAdd(1)(2)(3);
