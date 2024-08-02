/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
  let count = 0;
  for (as in A) {
    for (let i = 1; i <= A; i++) {
      if (as.sort() === a[i]) {
        count++;
      }
    }
  }
  count++;
};