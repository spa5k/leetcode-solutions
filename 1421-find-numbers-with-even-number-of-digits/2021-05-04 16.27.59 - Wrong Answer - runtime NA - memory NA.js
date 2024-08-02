/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  for (num in nums) {
    if (num.length % 2 === 0) {
      console.log(num.length);
      count++;
    }
  }
  return count;
};