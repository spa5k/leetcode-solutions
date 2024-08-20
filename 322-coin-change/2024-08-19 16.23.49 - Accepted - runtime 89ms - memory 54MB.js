/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
    const n = coins.length;

    if (n === 0) return 0;

    const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);

    dp[0] = 0;

    for (let i = 0; i < n; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            if (dp[j - coins[i]] != Number.MAX_SAFE_INTEGER) {
                dp[j] = Math.min(dp[j], 1 + dp[j - coins[i]]);
            }
        }
    }

    return dp[amount] !== Number.MAX_SAFE_INTEGER ? dp[amount] : -1;
}