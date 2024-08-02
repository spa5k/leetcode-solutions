/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums)=> {
    let maxSum = 0;
  let partialSum = 0;

  for (let item of nums) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
    
};