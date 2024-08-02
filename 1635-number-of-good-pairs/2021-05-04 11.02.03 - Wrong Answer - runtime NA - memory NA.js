/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i <= nums.length; i++) {
    const removedNum = nums.splice(i);
    if (nums.indexOf(removedNum) !== -1) {
      count++;
    }
  }
  return count;
};