/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const sorted = height.sort((a, b) => a - b);
  const heighest = sorted[sorted.length];
  const secondHeight = sorted[sorted.length - 1];
  return secondHeight * secondHeight;
};