/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = (preorder) => {
    let recur=(lower,upper) =>{
        if(preorder[0]<lower || preorder[0]>upper) return null;
        if(preorder.length===0) return null;
        
        let root=new TreeNode(preorder.shift());
        root.left=recur(lower,root.val);
        root.right=recur(root.val, upper);
        return root;
    }
    return recur(-Infinity,Infinity);
};