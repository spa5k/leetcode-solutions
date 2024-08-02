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
        let sum = i + j + k;
        if (i + j + k === target) {
          console.log(sum);
          return sum;
        } else {
          console.log(sum);

          nearest = Math.max(target - nearest, target - sum);
        }
      }
    }
  }
  return nearest;
};