/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    let maxPath = -Infinity;
    function dfs(node) {
        if (!node) {
            return 0;
        }

        let gainFromLeft = Math.max(dfs(node.left), 0);
        let gainFromRight = Math.max(dfs(node.right), 0);

        maxPath = Math.max(maxPath, gainFromLeft + gainFromRight + node.val);

        return Math.max(gainFromLeft + node.val, gainFromRight + node.val);
    }

    dfs(root);
    return maxPath;
};