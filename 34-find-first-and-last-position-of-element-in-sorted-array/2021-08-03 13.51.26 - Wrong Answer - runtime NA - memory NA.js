/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  const info = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (info.length === 0 && num === target) {
      info.push(i);
      continue;
    }

    if (num === target) {
      info[1] = i;
    }
  }

  if (info.length === 0) {
    return [-1, -1];
  }
  return info;
};