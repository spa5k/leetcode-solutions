/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  let rob1,
    rob2 = 0;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    let temp = Math.max(n + rob1, rob2);
    rob1 = rob2;
    rob2 = element;
  }
  return rob2;
};