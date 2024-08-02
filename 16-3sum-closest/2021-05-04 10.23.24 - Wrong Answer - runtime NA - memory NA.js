/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let nearest;
  for (i in nums) {
    for (j in nums) {
      for (k in nums) {
        if (i + j + k === target) {
          return i + j + k;
        } else {
          nearest = Math.max(target - nearest, target - (i + k + j));
        }
      }
    }
  }
  return nearest;
};