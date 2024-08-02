/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  const arr = new Array(nums.length + 1).fill(-1);

  for (const element of nums) {
    arr[element] = element;
  }

  let x1 = [];
  for (let index = 1; index < arr.length; index++) {
    const x = arr[index];
    if (x === -1) {
      x1.push(index);
    }
  }

  return x1;
};