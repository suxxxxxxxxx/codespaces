var maxProfit = function(prices, fee) {
    const n = prices.length;
    let buy = -prices[0], sell = 0;
    for (let i = 1; i < n; i++) {
        buy = Math.max(buy, sell - prices[i]);
        sell = Math.max(sell, buy + prices[i] - fee);
    }
    return sell;
}