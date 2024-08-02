/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums)=> {
    let maxSum=0;
    let partialSum=0;
    
    for(let item of nums) {
        partialSum+=item;
        maxSum=Math.max(maxSum,partialSum);
        if(partialSum<0) partialSum=0;
    }
    return maxSum;
    
};