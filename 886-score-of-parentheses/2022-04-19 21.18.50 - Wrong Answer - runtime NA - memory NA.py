class Solution:
    def scoreOfParentheses(self, s: str) -> int:
        count = 0
        stack = []
        balance_left = 0
        for i in s:
            if i == "(":
                balance_left += 1
                stack.append(i)
                continue

            if i == ")":
                stack.pop()
                balance_left -= 1
                count += 1
        if balance_left == 0:
            return count
        return count * balance_left