//记忆函数，闭包的高级功能
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
           return cache[key] = fn.apply(this, arguments);
        }
    }
}
//common.js 模块化方案
module.exports = memorize;