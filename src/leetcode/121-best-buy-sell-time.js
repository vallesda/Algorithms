/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || !prices.length) {
        return 0;
    }
    
    let minSeen = prices[0];
    let bestProfit = 0;
    for (stock of prices) {
        bestProfit = Math.max(stock - minSeen, bestProfit);
        minSeen = Math.min(stock, minSeen);
    }
    
    return bestProfit;
};