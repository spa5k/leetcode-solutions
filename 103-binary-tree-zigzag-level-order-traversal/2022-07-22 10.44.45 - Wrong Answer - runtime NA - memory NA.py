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
        l_to_r = False

        def append(left, right):
            if left:
                q.append(left)
            if right:
                q.append(right)
        while q:
            qlen = len(q)
            level = []
            for i in range(qlen):
                current = q.popleft()
                if current:
                    level.append(current.val)
                    if l_to_r:
                        l_to_r = False
                        append(current.left, current.right)
                    else:
                        l_to_r = True
                        append(current.right, current.left)

            if level:
                res.append(level)

        return res