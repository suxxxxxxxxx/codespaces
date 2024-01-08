var findNumberOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1);
    let count = new Array(nums.length).fill(1);
    let max = 1;
    for(let i = 1; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[i] > nums[j]){
                if(dp[j] + 1 > dp[i]){
                    dp[i] = dp[j] + 1;
                    count[i] = count[j];
                }else if(dp[j] + 1 === dp[i]){
                    count[i] += count[j];
                }
            }
        }
        max = Math.max(max, dp[i]);
    }
    let res = 0;
    for(let i = 0; i < nums.length; i++){
        if(dp[i] === max){
            res += count[i];
        }
    }
    return res;
}