/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;
  for (i in accounts) {
    Math.max(
      max,
      i.reduce((a, b) => a + b)
    );
  }
  return max;
};