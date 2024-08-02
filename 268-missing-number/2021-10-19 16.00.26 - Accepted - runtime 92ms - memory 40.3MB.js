/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  let sum = nums.length;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    sum += index - element; // Summing up the numbers in array and substracting the number from 1 to nums. length in same step
  }
  return sum;
};
// const missingNumber = (nums) => {
//   let arr = new Array(nums.length + 1).fill(-1);

//   for (const num of nums) {
//     arr[num] = nums;
//   }

//   return arr.indexOf(-1);
// };