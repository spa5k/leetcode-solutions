/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    let n = nums.length;
    if (n === 0) return [];

    nums.sort((a, b) => a - b);

    const dp = new Array(n).fill(1);
    let prevIndex = new Array(n).fill(-1);
    let maxIndex = 0;

    let max = -Infinity;
    for (let i = 1; i < n; i++) {
        for (j = i - 1; j >= 0; j--) {
            if (nums[i] % nums[j] === 0) {
                if (dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1;
                    prevIndex[i] = j;
                }
            }
        }

        if (dp[i] > max) {
            max = dp[i];
            maxIndex = i;
        }
    }
    const res = [];
    let currentIndex = maxIndex;

    while (currentIndex >= 0) {
        res.push(nums[currentIndex]);
        currentIndex = prevIndex[currentIndex];
    }

    return res.reverse();
};