# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        def symmtery(right, left):
            if not right and not left:
                return True
            if left.val != right.val:
                return False
            if left.left and right.right:
                symmtery(left.left, right.right)
            if left.right and right.left:
                symmtery(left.right, right.left)
            if left.right and left.left:
                symmtery(left.right, left.left)
            if right.right and right.left:
                symmtery(right.right, right.left)
            return True
        return symmtery(root.right, root.left)