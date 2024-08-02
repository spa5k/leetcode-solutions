/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const joined = [...nums1, ...nums2];

  const middle = Math.floor((joined.length - 1) / 2);
  const sortedArray = joined.sort((a, b) => a - b);

  if (joined.length % 2 !== 0) {
    return sortedArray[middle];
  } else {
    return (sortedArray[middle] + sortedArray[middle + 1]) / 2.0;
  }
};