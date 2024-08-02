/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const sorted = height.sort((a, b) => a - b);
  console.log(sorted);
  const secondHeight = sorted[sorted.length - 2];
  console.log("secondHeight", secondHeight);

  return secondHeight * secondHeight;
};