var maxProfit = function(prices) {
    let n = prices.length;
    let dp = Array(3);
    for (let i=0;i<3;i++) dp[i] = Array(n).fill(0);

    dp[0][0] = -prices[0];
    
    for (let i=1;i<n;i++){
        let p = prices[i];
        dp[0][i] = Math.max(dp[0][i-1], dp[2][i-1]-p);
        dp[1][i] = dp[0][i-1]+p;
        dp[2][i] = Math.max(dp[1][i-1],dp[2][i-1]);
    }
    return Math.max(dp[1][n-1],dp[2][n-1]);

    

};