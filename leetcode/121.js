// #贪心+动态规划

// -动态规划dp
//     最值问题用dp
//     -最优子结构
//         每一个小结构都是最优的 一直是最优的 全局考虑
//     -状态转移方程

//     低买高卖 0
//     最低的价格买入 最高的价格卖出 贪心 greedy

    // var maxProfit = function(prices) {
    //     const len = prices.length;
    //     if(len<2)return 0;
    //     let dp = new Array(len).fill(0);
    //     let min = prices[0];
    //     for(let i=1;i<len;i++){
    //         dp[i] = Math.max(dp[i-1],prices[i]-min);
    //         min = Math.min(min,prices[i]);
    //     }
    //     return dp[len-1];
    // }
    // 自顶向下 递归 流程
    //     当天卖dp[i] = Math.max(dp[i-1],prices[i]-min)
    //     自下而上迭代dp[i] 每一个都可以相信，最优子结构

// -贪心,总是做出在当前看来是最好的选择
// 不从整体最优上加以考虑，算法得到的是局部最优解。

var maxProfit = function(prices) {
    let min = prices[0]
    let profit = 0
    for(let i=1;i<prices.length;i++){
        if(prices[i]<min){
            min = prices[i]
        }else if(prices[i]-min>profit){
            profit = prices[i]-min
        }
    }
    return profit
}