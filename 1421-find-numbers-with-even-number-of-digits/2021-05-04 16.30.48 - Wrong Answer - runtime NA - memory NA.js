/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  return nums.reduce((a, c) => (c.toString().length % 2 === 0 ? a++ : a), 0);
};