/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let counter = new Map();
    let res = 0;

    for (let num of nums) {
        counter.set(num, (counter.get(num) || 0) + 1);
    }

    for (let c of counter.values()) {
        if (c === 1) {
            return -1;
        }
        res += Math.floor(c / 3) + (c % 3 === 0 ? 0 : 1);
    }
    return res;
};