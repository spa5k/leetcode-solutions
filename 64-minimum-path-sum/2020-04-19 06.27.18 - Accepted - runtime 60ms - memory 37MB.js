/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (!grid || !grid.length) return 0;
    let temp = [[grid[0][0]]];
    let m = grid.length, n = grid[0].length;
    for (let j = 1; j < n; j++) {
        temp[0][j] = temp[0][j-1] + grid[0][j];
    }
    for (let i = 1; i < m; i++) {
        temp[i] = [];
        temp[i][0] = temp[i-1][0] + grid[i][0];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            temp[i][j] = Math.min(temp[i][j-1], temp[i-1][j]) + grid[i][j];
        }
    }
    return temp[m-1][n-1];
};