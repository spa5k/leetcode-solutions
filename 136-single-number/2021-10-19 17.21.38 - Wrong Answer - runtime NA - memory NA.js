/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    let x = n;
    nums[i] = n * -1;

    if (!nums.includes(x)) {
      return x;
    }
  }
};
console.log(singleNumber([1, 2, 1, 3, 3]));