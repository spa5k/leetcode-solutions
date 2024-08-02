function coinChange(coins, amount) {
    let result = Number.MAX_SAFE_INTEGER;
    
    function dfs(index, sum, count) {
        if (sum > amount) {
            return;
        }
        if (sum === amount) {
            result = Math.min(result, count);
            return;
        }
        for (let i = index; i < coins.length; i++) {
            dfs(i, sum + coins[i], count + 1);
        }
    }

    dfs(0, 0, 0);
    return result === Number.MAX_SAFE_INTEGER ? -1 : result;
}