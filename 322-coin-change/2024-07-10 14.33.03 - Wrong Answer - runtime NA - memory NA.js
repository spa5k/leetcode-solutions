/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let result = 0;
    const state = [];

    function dfs(start, sum) {
        if (sum === amount) {
            result += 1;
            return;
        }

        if (start >=coins.length) {
            return;
        }

        for (let i = 0; i < coins.length; i++) {
            state.push(coins[i]);
            dfs(start+1, sum + coins[i]);
            state.pop();
        }
    }

    dfs(0, 0);
    return result;
};