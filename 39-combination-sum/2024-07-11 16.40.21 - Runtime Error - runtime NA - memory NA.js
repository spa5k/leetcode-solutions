/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
     const result = [];
    const state = [];
    // candidates.sort();

    function dfs(start, sum) {
        if (sum === target) {
            result.push([...state]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            state.push(candidates[i]);
            dfs(i, sum + candidates[i]);
            state.pop();
        }
    }

    dfs(0, 0);
    return result;
};