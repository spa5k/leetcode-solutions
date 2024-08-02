# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return root
        res = []
        res.append(root.val)

        def get_right(root):
            if root:
                res.append(root.val)
                get_right(root.right)
        get_right(root.right)
        return res
