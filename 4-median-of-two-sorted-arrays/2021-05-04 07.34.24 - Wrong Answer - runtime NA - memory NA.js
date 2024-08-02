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
  if (length % 2 !== 0) {
    const middleValueIndex = Math.ceil(length / 2);
    console.log(middleValueIndex);
    return joined[middleValueIndex - 1];
  } else if (length < 10) {
    // 4->2->
    // 12 ->10/2->5->6,7
    // 100 ->98/2->49->50,60
    const digit1 = length / 2;
    console.log(digit1);
    const d1 = joined[digit1];
    const d2 = joined[digit1 - 1];
    return (d1 + d2) / 2;
  } else {
    const digit1 = length / 2;
    console.log(digit1);
    const d1 = joined[digit1];
    const d2 = joined[digit1 + 1];
    return (d1 + d2) / 2;
  }
};