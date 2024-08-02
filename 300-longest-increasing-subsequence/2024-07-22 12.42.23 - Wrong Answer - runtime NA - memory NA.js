let lis = 0; // global variable to store answer

function f(i, nums, memo) {
  if (i === 0) {
    return 0;
  }
  if (memo[i] !== 0) { // if already computed, use said answer
    return memo[i];
  }
  let len = f(0, nums, memo) + 1; // begin with starting a new LIS
  let ni = nums[i - 1];

  for (let j = 1; j < i; j++) { // try building upon a pre-existing LIS
    let nj = nums[j - 1];
    let f_of_j = f(j, nums, memo); // compute f(j), otherwise it may never be computed
    if (nj < ni) {
      len = Math.max(len, f_of_j + 1);
    }
  }
  // LIS can end anywhere in the sequence due to the definition of our state, so update each time
  lis = Math.max(lis, len);

  return memo[i] = len;
}

function lengthOfLIS(nums) {
  let n = nums.length;
  let memo = new Array(n + 1).fill(0);
  f(n, nums, memo);
  return lis;
}
