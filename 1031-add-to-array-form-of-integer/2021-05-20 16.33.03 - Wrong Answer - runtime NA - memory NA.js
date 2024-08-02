/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let x = num.reduce((a, b) => (a += b.toString()));
  let num1 = Number(x) + k;
  return num1.toString().split("");
};