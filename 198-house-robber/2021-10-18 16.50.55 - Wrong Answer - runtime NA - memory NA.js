/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  let even = 0;
  let odd = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (index % 2 === 0) {
      even += element;
    } else {
      odd += element;
    }
  }
  return Math.max(even, odd);
};