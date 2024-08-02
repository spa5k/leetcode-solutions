/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (s.length === 0) return 0;

    let state = 0;
    const memo = new Array(s.length).fill(-1);

    function dfs(start) {
        // Base case: If we've reached the end of the string, we found a valid decoding
        if (start === s.length) {
            return 1;
        }

        // If the current character is '0', return 0 because it's not valid
        if (s[start] === '0') {
            return 0;
        }

        // If we've already computed this subproblem, return the cached result
        if (memo[start] !== -1) {
            return memo[start];
        }

        // Consider single digit
        let ways = dfs(start + 1);

        // Consider two digits if there are at least two characters remaining
        if (start + 1 < s.length) {
            const twoDigit = parseInt(s[start] + s[start + 1], 10);
            if (twoDigit >= 10 && twoDigit <= 26) {
                ways += dfs(start + 2);
            }
        }

        // Cache the result
        memo[start] = ways;
        return ways;
    }

    state = dfs(0);
    return state;
};
