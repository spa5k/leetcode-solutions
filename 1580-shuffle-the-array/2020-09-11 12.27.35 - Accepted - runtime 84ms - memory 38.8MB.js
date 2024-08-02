/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let x=[];
    for(let i=0;i<n;i++) {
    x.push(nums[i],nums[n+i])
    }
return x
};