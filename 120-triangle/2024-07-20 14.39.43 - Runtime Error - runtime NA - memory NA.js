/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
      if (row === triangle.length) {
    return 0;
  }

  let leftSum = minPathSum(triangle, row + 1, col);
  let rightSum = minPathSum(triangle, row + 1, col + 1);
  return triangle[row][col] + Math.min(leftSum, rightSum);
};