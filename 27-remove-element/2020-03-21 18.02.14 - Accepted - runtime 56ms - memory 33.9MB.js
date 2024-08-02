/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let length = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[length++] = nums[i];
    }
  }
  nums.length = length;
};