/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  let arr = new Array(nums.length + 1).fill(-1);

  for (const num of nums) {
    arr[num] = nums;
  }

  return arr.indexOf(-1);
};