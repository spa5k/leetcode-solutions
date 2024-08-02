class Solution:
    def maxDepth(self, s: str) -> int:
        lCount = 0
        max_depth = 0

        for i in s:
            if i == "(":
                lCount += 1
            elif i == ")":
                lCount -= 1

            max_depth = max(lCount, max_depth)
        return max_depth

