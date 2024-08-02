/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m === 0 || n === 0) return 0;

    if (m === 1 && n === 1) return m * n;

    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
};