/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    const counter = {};
    for (let n of nums) {
        if (counter[n]) {
            counter[n] += 1;
        } else {
            counter[n] = 1;
        }
    }

    let ans = 0;

    for (let c of Object.values(counter)) {
        if (c === 1) {
            return -1;
        }
        ans += Math.ceil(c / 3);
    }
    return ans;
};