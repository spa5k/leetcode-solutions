/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let arr = [];
  for (i = 1; i <= nums.length; i++) {
    let usefulArr = arr.slice(0, i);
    let sum = usefulArr.reduce((a, b) => a + b);
    arr.push(sum);
  }
  return arr;
};