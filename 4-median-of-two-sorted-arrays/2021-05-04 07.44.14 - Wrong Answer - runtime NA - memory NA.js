/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const joined = [...nums1, ...nums2];
  const len = joined.length;
  const mid = Math.ceil(len / 2);
  const median =
    len % 2 == 0 ? (joined[mid] + joined[mid - 1]) / 2 : joined[mid - 1];
  return median;
};