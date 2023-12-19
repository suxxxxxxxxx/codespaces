//超级丑数 是一个正整数，并满足其所有质因数都出现在质数数组 primes 中。

// 给你一个整数 n 和一个整数数组 primes ，返回第 n 个 超级丑数 。

// 题目数据保证第 n 个 超级丑数 在 32-bit 带符号整数范围内。
var nthSuperUglyNumber = function(n, primes) {
    const dp = new Array(n + 1).fill(0);
    const m = primes.length;
    const pointers = new Array(m).fill(0);//指针数组
    const nums = new Array(m).fill(1);
    for (let i = 1; i <= n; i++) {
        let minNum = Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < m; j++) {
            minNum = Math.min(minNum, nums[j]);
        }
        dp[i] = minNum;
        for (let j = 0; j < m; j++) {
            if (nums[j] == minNum) {
                pointers[j]++;
                nums[j] = dp[pointers[j]] * primes[j];
            }
        }
    }
    return dp[n];
}
