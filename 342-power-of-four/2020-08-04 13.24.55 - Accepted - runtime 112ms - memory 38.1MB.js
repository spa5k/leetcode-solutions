/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  if (num <= 0) return false;
  if (num === 1) return true;
  const x = getBaselog(num) / getBaselog(4);
  return x % 1 === 0;
};

const getBaselog = (num) =>  Math.log(num) / Math.log(2);