/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
    let profit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        const diff = prices[i + 1] - prices[i];
        if (diff > 0) profit += diff;
    }

    return profit;
};