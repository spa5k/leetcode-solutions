/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// const searchInsert = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) return i;
//   }
//   return nums.length;
// };
const searchInsert = (nums, target) => {
  if (nums.includes(target)) return nums.indexOf(target);
  else {
    while (low < high) {
      var mid = low + high + 1;
      if (nums[mid] < value) low = mid + 1;
      else high = mid;
    }
    return low;
  }
};