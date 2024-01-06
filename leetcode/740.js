var deleteAndEarn = function(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
    }
    const sum = new Array(max + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        sum[nums[i]] += nums[i];
    }
    const dp = new Array(max + 1).fill(0);
    dp[1] = sum[1];
    dp[2] = Math.max(sum[1], sum[2]);
    for (let i = 3; i <= max; i++) {
        dp[i] = Math.max(dp[i - 2] + sum[i], dp[i - 1]);
    }
    return dp[max];
}