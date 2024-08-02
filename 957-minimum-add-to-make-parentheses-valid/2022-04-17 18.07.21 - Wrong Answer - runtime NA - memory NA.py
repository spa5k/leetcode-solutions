class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        balance = 0
        for i in s:
            if i == "(":
                balance += 1

            if i == ")" and balance > 0:
                balance -= 1
                continue
            if i == ")":
                balance += 1
        return balance