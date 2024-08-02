/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let area = 0;
  for (h of height) {
    for (a of height) {
      area = Math.max(area, Math.min(height[a], height[h]) * (a - h));
    }
  }
  return area;
};