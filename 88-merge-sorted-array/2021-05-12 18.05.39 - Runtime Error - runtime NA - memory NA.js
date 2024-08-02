/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let current = m + n - 1;

  while (m > 0 && n > 0) {
    if (nums1[m - 1] < nums2[n - 1]) {
      nums1[current] = nums2[n - 1];
    } else {
      nums1[current] = nums1[m - 1];
    }
    current--;
  }
  while (n > 0) {
    nums1[current] = nums2[n - 1];
    n--, current--;
  }
};