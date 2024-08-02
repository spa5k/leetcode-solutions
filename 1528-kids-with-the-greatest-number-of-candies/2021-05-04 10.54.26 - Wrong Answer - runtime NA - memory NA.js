/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let arr = [];
  const max = Math.max(...candies);
  console.log(max);
  for (candy in candies) {
    candies[candy] + extraCandies > max ? arr.push(true) : arr.push(false);
  }
  return arr;
};