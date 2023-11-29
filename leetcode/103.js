coins = [2,3, 5], amount = 11
// var coinChange = function(coins, amount) {
//     if(amount == 0) return {0: 0}
//     let max = {}
//     for(let i = coins.length - 1; i >= 0; i--){
//         if(amount >= coins[i]){//找到了能用的最大面值
//             max[coins[i]] = Math.floor(amount / coins[i])
//             let rest = amount % coins[i]
//             return Object.assign(max, coinChange(coins, rest))
//         }
//     }
// }


// var coinChange = function(coins, amount) {
//     let dp = new Array(amount + 1).fill(Infinity);
//     dp[0] = 0;
//     for (let i = 0; i < coins.length; i++) {
//         let coin = coins[i];
//         for (let j = coin; j <= amount; j++) {
//             dp[j] = Math.min(dp[j], dp[j - coin] + 1);
//         }
//     }
//     return dp[amount] === Infinity ? -1 : dp[amount];
// }


var coinChange = function(coins, amount) {
    let dp = []
    dp[0] = 0;
    for(let i = 1; i <= amount; i++){
        dp[i] = Infinity
        for(let j = 0; j < coins.length; j++){
            if(i >= coins[j]){
                dp[i] = Math.min(dp[i], dp[i-coins[j]] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
}
console.log(coinChange(coins, amount));