/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    const i=nums.indexOf(target);
    if(i===null || i===undefined) {
        return -1;
    } else {
        return i;
    }
};