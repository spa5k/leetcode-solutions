/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const sorted = height.sort((a, b) => a - b);
  const heighest = sorted[sorted.length - 1];
  console.log("heighest", heighest);
  const secondHeight = sorted[sorted.length - 2];
  console.log("secondHeight", secondHeight);

  return secondHeight * secondHeight;
};