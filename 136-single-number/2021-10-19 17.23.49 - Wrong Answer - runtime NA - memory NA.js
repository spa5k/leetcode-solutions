/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]; // curremt element
    let temp = n; // temporary storage
    nums[i] = n * -1;

    if (!nums.includes(temp)) {
      return temp;
    }
  }
};
console.log(singleNumber([2, 2, 1]));