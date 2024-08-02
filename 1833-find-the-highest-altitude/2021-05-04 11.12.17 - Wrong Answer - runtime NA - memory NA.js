/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let arr = [0, ...gain];
  let max = 0;
  return arr.reduce((a, b) => {
    if (a + b > max) {
      max = +b;
    }
  });
  return max;
};