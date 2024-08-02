/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  const arr = new Array(nums.length + 1).fill(-1);

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    arr[element] = element;
  }

  let x = [];
  for (const { i, x } of arr) {
    if (x === -1) {
      x.push(i);
    }
  }
  return x;
};