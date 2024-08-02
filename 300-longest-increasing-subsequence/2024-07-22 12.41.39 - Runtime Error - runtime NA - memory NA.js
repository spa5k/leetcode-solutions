let maxLis = 0;

function calculate(i, nums, memo) {
    if (i === 0) {
        return 0;
    }

    if (memo[i] != 0) {
        return memo[i];
    }

    let len = calculate(0, nums, memo) + 1;

    let ni = nums[i - 1];

    for (let j = 1; j < i; j++) {
        let nj = nums[j - 1];
        let calculateOfJ = calculate(j, nums, memo);

        if (nj < ni) {
            len = Math.max(len, calculateOfJ + 1);
        }
    }

    maxLis = Math.max(maxLis, len);
    return (memo[i] = len);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let n = nums.length;
    let memo = new Array(n + 1).fill(0);
    f(n, nums, memo);
    return lis;
};