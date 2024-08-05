/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
  const MOD = 1e9 + 7;
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(nums[i]);
    let last = nums[i];
    for (let j = i + 1; j < n; j++) {
      arr.push((last + nums[j]) % MOD);
      last = (last + nums[j]) % MOD;
    }
  }

  arr.sort((a, b) => a - b);

  let sum = 0;
  for (let i = left - 1; i < right; i++) {
    sum = (sum + arr[i]) % MOD;
  }

  return sum;
};