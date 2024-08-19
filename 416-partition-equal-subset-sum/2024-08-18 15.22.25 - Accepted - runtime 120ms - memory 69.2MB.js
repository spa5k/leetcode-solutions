/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const sum = nums.reduce((a, b) => a + b, 0);

    // If the sum is odd, it's not possible to partition into two equal subsets
    if (sum % 2 !== 0) {
        return false;
    }

    const target = sum / 2;

    const memo = {};

    function dfs(n, subsum) {
        if (memo[n] === undefined) {
            memo[n] = {};
        }

        if (memo[n][subsum] != null) {
            return memo[n][subsum];
        }

        if (subsum === 0) return true;

        if (n === 0 || subsum < 0) {
            return false;
        }

        const res = dfs(n - 1, subsum - nums[n - 1]) || dfs(n - 1, subsum);
        memo[n][subsum] = res;
        return res;
    }

    return dfs(nums.length - 1, target);
};