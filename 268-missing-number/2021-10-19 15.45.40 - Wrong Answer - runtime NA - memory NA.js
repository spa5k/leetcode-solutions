/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  nums.sort((a, b) => a - b);

  let last = nums[0];
  for (let index = 1; index < nums.length; index++) {
    const element = nums[index];
    if (last + 1 === element) {
      last = element;
      continue;
    } else {
      return element - 1;
    }
  }
};