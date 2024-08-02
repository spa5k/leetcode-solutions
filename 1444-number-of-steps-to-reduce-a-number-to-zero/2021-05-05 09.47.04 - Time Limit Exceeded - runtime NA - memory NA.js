/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let a = num;
  let count;
  while (num > 0) {
    if (num % 2 === 0) {
      count++;
      a = a / 2;
    } else {
      count++;
      a = a - 1;
    }
  }
  return count;
};