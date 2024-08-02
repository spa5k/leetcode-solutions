/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let area = 0;
  for (h of height.length) {
    for (a of height.length) {
      area = Math.max(area, Math.min(height[a], height[h]) * (a - h));
    }
  }
  return area;
};