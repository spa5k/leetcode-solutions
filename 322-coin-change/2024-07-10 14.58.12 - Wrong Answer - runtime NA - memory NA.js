function coinChange(coins, amount) {
    let memo = []; // Memoization array to store minimum coins required for each sum

    function dfs(sum) {
        if (sum === amount) { // Base case: if sum equals the amount, return 0 coins needed
            return 0;
        }
        if (sum > amount) { // Base case: if sum exceeds the amount, return Infinity (invalid path)
            return Infinity;
        }
        if (memo[sum] !== undefined) { // If memo[sum] is not undefined, return the stored result
            return memo[sum];
        }
        
        let ans = Infinity; // Initialize ans to Infinity to find the minimum coins needed

        for (let coin of coins) { // Iterate through each coin in coins array
            let result = dfs(sum + coin); // Recursively calculate the result for the next sum
            if (result !== Infinity) { // If result is not Infinity, update ans with the minimum coins
                ans = Math.min(ans, result + 1);
            }
        }
        
        memo[sum] = ans; // Store the minimum coins needed for current sum in memoization array
        return ans;
    }

    let result = dfs(0); // Start DFS from sum = 0
    return result === Infinity || !result ? -1 : result; // Return -1 if no valid combination found, otherwise return result
}
