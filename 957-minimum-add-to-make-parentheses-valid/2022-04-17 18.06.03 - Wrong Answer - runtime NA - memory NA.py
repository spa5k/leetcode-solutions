class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        res = 0
        balance = 0
        for i in s:
            if i == "(":
                balance += 1

            if i == ")" and balance > 0:
                balance -= 1
                continue
            if i == ")":
                balance += 1
            res = max(res, balance)
        return res