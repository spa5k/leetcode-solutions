/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const totalSum = nums.reduce((a, b) => a + b, 0);

    // If the sum is odd, it's not possible to partition into two equal subsets
    if (totalSum % 2 !== 0) {
        return false;
    }

    const subSetSum = totalSum / 2;

    const n = nums.length;

    const dp = Array.from({ length: n + 1 }, () =>
        Array(subSetSum + 1).fill(false)
    );

    dp[0][0] = true;

    for (let i = 1; i <= n; i++) {
        let curr = nums[i - 1];

        for (let j = 0; j <= subSetSum; j++) {
            if (j < curr) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - curr];
            }
        }
    }

    return dp[n][subSetSum];
};