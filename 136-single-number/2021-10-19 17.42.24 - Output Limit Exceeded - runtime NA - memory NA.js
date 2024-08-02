/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== "a") {
      let temp = nums[i];
      nums[i] = "a";
      let index = nums.indexOf(temp);
      if (index !== -1) {
        nums[index] = "a";
        console.log(nums);
      } else {
        return temp;
      }
    }
  }
};