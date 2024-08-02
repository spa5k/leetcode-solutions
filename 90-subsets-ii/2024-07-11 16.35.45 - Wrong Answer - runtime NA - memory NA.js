/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = [];
    const state = [];
    const memo = {};
    function dfs(start) {
        if (memo[state.join(',')]) {
            return;
        }

        result.push([...state]);

        for (let i = start; i < nums.length; i++) {
            state.push(nums[i]);
            dfs(i + 1);
            state.pop();
        }

        memo[state.join(',')] = true;
    }
    dfs(0);
    return result;
};