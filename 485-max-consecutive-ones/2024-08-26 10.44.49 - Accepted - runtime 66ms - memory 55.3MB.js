/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let maxCount = 0;
    let currentCount = 0;
    for (let num of nums) {
        if (num === 1) {
            currentCount++;
        } else if (num === 0) {
            maxCount = Math.max(currentCount, maxCount);
            currentCount = 0;
        }
    }

    maxCount = Math.max(currentCount, maxCount);

    return maxCount;
};