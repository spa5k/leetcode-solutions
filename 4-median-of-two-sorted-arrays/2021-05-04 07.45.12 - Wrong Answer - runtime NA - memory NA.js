/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arrSort = [...nums1, ...nums2];
  const len = arrSort.length;
  const mid = Math.ceil(len / 2);

  const median =
    len % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];
  return median;
};