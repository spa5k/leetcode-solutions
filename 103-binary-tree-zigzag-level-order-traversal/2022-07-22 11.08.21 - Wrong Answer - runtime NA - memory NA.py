# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return root
        q = collections.deque()
        q.append(root)
        res = []
        rev = False
        while q:
            qlen = len(q)
            level = []
            for i in range(qlen):
                current = q.popleft()
                if rev:
                    if current.left:
                        q.append(current.left)
                    if current.right:
                        q.append(current.right)
                    level.append(current.val)
                else:
                    if current.right:
                        q.append(current.right)
                    if current.left:
                        q.append(current.left)
                    level.append(current.val)
            rev = not rev

            if level:
                res.append(level)
        return res