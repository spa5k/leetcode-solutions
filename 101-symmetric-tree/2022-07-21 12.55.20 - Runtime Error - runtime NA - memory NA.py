# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        def symmtery(right, left):
            if left.val != right.val:
                return False
            if not left.left.val == right.right.val and not left.right.val == right.left.val:
                return False
            symmtery(left.right, left.left)
            symmtery(right.right, right.left)
            return True
        return symmtery(root.right, root.left)