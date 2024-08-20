/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    const n = nums.length + 2;

    nums = [1, ...nums, 1];

    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    for (let left = n - 2; left >= 1; left--) {
        for (let right = left; right <= n - 2; right++) {
            for (let i = left; i <= right; i++) {
                const gain = nums[left - 1] * nums[i] * nums[right + 1];
                const remaining = dp[left][i - 1] + dp[i + 1][right];

                dp[left][right] = Math.max(remaining + gain, dp[left][right]);
            }
        }
    }

    return dp[1][n - 2];
};