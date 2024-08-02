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
                if root.right:
                    res.append(root.right.val)
                elif root.left:
                    res.append(root.left.val)
                get_right(root)
        get_right(root)
        return res
