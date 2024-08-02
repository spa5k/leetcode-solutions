var threeSum = function (nums) {
  const res = [];
  if (nums.length < 3) {
    return res;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i - 1] == nums[1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
      }
      while (left < right && nums[left] === nums[left + 1]) {
        left++;
      }
      while (left < right && nums[right] === nums[right - 1]) {
        right--;
      }
      left++;
      right--;
    }
  }
  return res;
};