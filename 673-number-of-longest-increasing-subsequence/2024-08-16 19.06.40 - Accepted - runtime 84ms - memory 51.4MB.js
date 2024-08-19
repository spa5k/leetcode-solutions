/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
    if (nums.length === 0) return 0;

    const n = nums.length;
    const dp = new Array(nums.length).fill(1);
    const count = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    count[i] = count[j];
                } else if (dp[j] + 1 === dp[i]) {
                    count[i] += count[j];
                }
            }
        }
    }

    const maxLength = Math.max(...dp);
    let result = 0;

    for (let i = 0; i < n; i++) {
        if (dp[i] === maxLength) {
            result += count[i];
        }
    }

    return result;
};