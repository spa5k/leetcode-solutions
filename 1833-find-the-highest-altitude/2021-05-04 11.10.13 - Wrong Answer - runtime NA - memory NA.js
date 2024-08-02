/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let arr = [0, ...gain];
  return arr.reduce((a, b) => a + b);
};