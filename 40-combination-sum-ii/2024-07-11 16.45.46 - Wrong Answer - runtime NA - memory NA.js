var combinationSum2 = function (candidates, target) {
    const result = [];
    const state = [];
    const memo = {};
    candidates.sort();

    function dfs(start, sum) {
        if (memo[state.join('')]) {
            return;
        }
        if (sum === target) {
            result.push([...state]);
            return;
        }

        if (sum > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            state.push(candidates[i]);
            dfs(i + 1, sum + candidates[i]);
            state.pop();
        }
        memo[state.join('')] = true;
    }

    dfs(0, 0);
    return result;
};