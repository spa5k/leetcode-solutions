/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const joined = [...nums1, ...nums2];
  const length = joined.length;
  if (length === 1) {
    return joined[0];
  }
  if (length % 2 === 0 && length > 10) {
    // 4->2->
    // 12 ->10/2->5->6,7
    // 100 ->98/2->49->50,60
    const digit1 = (length - 2) / 2;
    const d1 = joined[digit1 + 1];
    const d2 = joined[digit1 + 2];
    return (d1 + d2) / 2;
  }
  if (length % 2 === 0 && length < 1) {
    const digit1 = (length - 2) / 2;
    const d1 = joined[digit];
    const d2 = joined[digit + 1];
    return (d1 + d2) / 2;
  } else {
    const middleValueIndex = Math.round(length / 2);
    return joined[middleValueIndex];
  }
};