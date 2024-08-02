# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        res = [0]

        def dfs(root):
            if not root:
                return -1
            left = dfs(root.left)
            right = dfs(root.right)

            res[0] = max(res[0], 2+left+right)
            return 1+max(left, right)
        dfs(root)
        return res[0]

# class Solution:
#     def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
#         res = 0
#         res2 = 0

#         current = root

#         while current.right:
#             res += 1
#             current = current.right

#         current2 = root
#         while current2.left:
#             res2 += 1
#             current2 = current2.left

#         res
#         res2
#         return res + res2