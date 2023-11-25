// 永远不要相信用户的输入
function add(a, b) {
    // ...代表参数？ 
    if (arguments.length != 2) {
        throw new Error('参数数量不对');
    }
    if (typeof a != 'number' || typeof b != 'number') {
        throw new Error('参数类型错误')
    }
    return a + b;
}

function memorize(fn){
    if(typeof fn != 'function') {
        throw new Error('请传入函数')
    }
    var cache = {};//key:value O(1)
    return function() {
        // 唯一的key
        var key = arguments.length + Array.prototype.join.call(arguments, ',');
        console.log(key);
        if(key in cache) {
            return cache[key];
        }else{
            fn.apply(this, arguments);
        }
    }
}
//记忆功能
const memorizeAdd = memorize(add);
console.log(memorizeAdd(1, 2));
console.log(memorizeAdd(1, 2));
// js 不严格 编译阶段
// try {
//     add();
// } catch(err) {
//     console.log(err)
// }
// console.log(111)

// try{
//     console.log(add(1, 2));
// }catch(err) {
//     console.log(err);
// }
