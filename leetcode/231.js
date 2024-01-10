//用n和n-1的与运算，如果结果为0，说明n的二进制表示中只有一个1，即n是2的幂次方
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0;
};