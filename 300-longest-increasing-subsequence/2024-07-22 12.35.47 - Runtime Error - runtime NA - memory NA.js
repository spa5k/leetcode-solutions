function generateSubsets(nums) {
    const res = [[]];
    const state = [];

    function dfs(start) {
        if (start === nums.length) {
            return;
        }

        state.push(nums[start]);
        res.push([...state]);
        dfs(start + 1);
        state.pop();
        dfs(start + 1);
    }

    dfs(0);
    return res;
}

function isIncreasing(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] >= nums[i]) {
            return false;
        }
    }
    return true;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let subsets = generateSubsets(nums);
    let mxLen = 0;
    for (const subset of subsets) {
        if (isIncreasing(subset)) {
            mxLen = Math.max(mxLen, subset.length);
        }
    }
    return mxLen;
};