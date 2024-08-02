/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    const memo = {};
    function countWays(index, currentSum) {
        const key = `${index}:${currentSum}`;

        if (key in memo) {
            return memo[key];
        }

        if (index === nums.length) {
            const res = currentSum == target ? 1 : 0;
            return res;
        }

        const left = countWays(index + 1, currentSum + nums[index]);
        const right = countWays(index + 1, currentSum - nums[index]);
        const res = left + right;
        memo[key] = res;
        return res;
    }

    return countWays(0, 0);
};