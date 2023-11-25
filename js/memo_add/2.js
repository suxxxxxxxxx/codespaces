const memorize = require('./memo.js');
var count = 0;
var fibonacci = function (n) {
    count++;
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};
const memorizeFibonacci = memorize(fibonacci);

console.time('fibonacci');
fibonacci(45);
console.log(count);
console.timeEnd('fibonacci');
