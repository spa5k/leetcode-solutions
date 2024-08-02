/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  let previous = 1;
  let current = 2;
  let tmp;

  for (let index = 3; index <= n; index++) {
    tmp = previous;
    prev = current;
    current += tmp;
  }
  return current;
};