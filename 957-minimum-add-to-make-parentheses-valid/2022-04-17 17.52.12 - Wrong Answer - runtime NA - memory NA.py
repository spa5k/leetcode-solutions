class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        left = 0
        right = 0
        for i in s:
            if i == ")":
                right += 1
                continue
            if i == "(":
                left += 1
                continue
        return abs(max(right, left) - min(right, left))