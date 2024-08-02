/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const joined = [...nums1, ...nums2];

  const middle = Math.floor((joined.length - 1) / 2);
  console.log("middle", middle);
  console.log(joined);

  if (joined.length % 2 !== 0) {
    console.log("here");
    let x = joined[middle];
    console.log(x);
    return x;
  } else {
    console.log("there");
    return (joined[middle] + joined[middle + 1]) / 2.0;
  }
};