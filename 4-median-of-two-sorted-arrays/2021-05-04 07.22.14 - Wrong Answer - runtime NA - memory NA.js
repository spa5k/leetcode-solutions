/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const joinedArray = [...nums1, ...nums2];
  const length = joinedArray.length;
  if (length === 1) {
    return joinedArray[0];
  }
  if (length % 2 === 0) {
    const digit1 = (length - 2) / 2;
    const d1 = joinedArray[digit1 + 1];
    const d2 = joinedArray[digit1 + 2];
    return (d1 + d2) / 2;
  } else {
    const middleValueIndex = Math.round(length / 2);
    return joinedArray[middleValueIndex];
  }
};