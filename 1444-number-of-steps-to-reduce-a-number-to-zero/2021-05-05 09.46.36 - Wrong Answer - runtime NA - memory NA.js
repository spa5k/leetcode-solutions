/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let count;
  while (num > 0) {
    if (num % 2 === 0) {
      count++;
      num = num / 2;
    } else {
      count++;
      num = num - 1;
    }
  }
  return count;
};