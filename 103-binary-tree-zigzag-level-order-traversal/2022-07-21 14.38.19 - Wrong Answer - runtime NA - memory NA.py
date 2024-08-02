# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
import collections


class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return root
        q = collections.deque()
        q.append(root)
        res = []
        l_to_r = False
        while q:
            qlen = len(q)
            level = []
            for i in range(qlen):
                current = q.popleft()
                if current:
                    level.append(current.val)
                    if l_to_r:
                        if current.left:
                            q.append(current.left)
                        if current.right:
                            q.append(current.right)
                        l_to_r = False
                    else:
                        l_to_r = True
                        if current.right:
                            q.append(current.right)
                        if current.left:
                            q.append(current.left)
            if level:
                res.append(level)
        return res