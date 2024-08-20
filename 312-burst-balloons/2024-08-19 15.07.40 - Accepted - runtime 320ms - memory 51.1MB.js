/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    nums = [1, ...nums, 1];

    const n = nums.length;

    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    function findOptimalValue(left, right) {
        if (right - left < 0) {
            return 0;
        }

        if (dp[left][right] > 0) {
            return dp[left][right];
        }

        let result = 0;

        for (let i = left; i <= right; i++) {
            const gain = nums[left - 1] * nums[i] * nums[right + 1];

            const remaining =
                findOptimalValue(left, i - 1) + findOptimalValue(i + 1, right);
            result = Math.max(gain + remaining, result);
        }

        dp[left][right] = result;
        return result;
    }

    return findOptimalValue(1, n - 2);
};
