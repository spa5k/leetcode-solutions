class Solution:
        def validPalindrome(self, s: str) -> bool:
            l, r = 0, len(s) - 1

            while l < r:
                if s[l] != s[r]:
                    skipL, skipR = s[l + 1 : r + 1], s[l:r]
                    return self.isPalindrome(skipL) or self.isPalindrome(skipR)
                l, r = l + 1, r - 1
            return True


        # find palindrome by 2 pointers
        def isPalindrome(s: str) -> bool:
            l, r = 0, len(s) - 1
            while l < r:
                if s[l] != s[r]:
                    return False
                l, r = l + 1, r - 1
            return True