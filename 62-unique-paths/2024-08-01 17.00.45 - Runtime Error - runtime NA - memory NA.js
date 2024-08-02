/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function (m, n, memo = []) {
    if (memo[m][n]) return memo[m][n];
    if (m === 0 || n === 0) return 0;

    if (m === 1 && n === 1) return m * n;

    const res = uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
    memo[m][n] = res;
    return res;
};