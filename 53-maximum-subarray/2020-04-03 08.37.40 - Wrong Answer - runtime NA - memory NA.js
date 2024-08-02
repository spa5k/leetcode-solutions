/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums)=> {
    var currentMax = 0;
    var max = 0;
    for (var i = 0; i < nums.length; i += 1) {
      currentMax = Math.max(0, currentMax + nums[i]);
      max = Math.max(max, currentMax);
    }
    return max;
};