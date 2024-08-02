class Solution:
    def validPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1

        while l < r:
            if s[l] != s[r]:
                skipL, skipR = s[l + 1 : r + 1], s[l:r]
                return self.validPalindrome(skipL) or self.validPalindrome(skipR)
            l,r=l+1,r-1
        return True
    # find palindrome by 2 pointers
    def validPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1
        while l < r:
            if s[l] != s[r]:
                return self.isPalindrome(s, l + 1, r) or self.isPalindrome(s, l, r - 1)
            l, r = l + 1, r - 1
        return True