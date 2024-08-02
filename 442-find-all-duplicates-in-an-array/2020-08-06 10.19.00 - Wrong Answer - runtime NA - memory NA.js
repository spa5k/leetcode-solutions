/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = (nums) => {
    let x=[];
    
    for(i=0;i<=nums.length;i++) {
        {nums.indexOf(i) && x.push(i)}
    }
        
        return x
};