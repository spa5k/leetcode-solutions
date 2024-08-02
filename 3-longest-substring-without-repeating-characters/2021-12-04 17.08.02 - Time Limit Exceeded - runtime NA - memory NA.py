class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_set = set()
        max_length = 0

        left = 0

        for right in range(len(s)):
            while s[right] in char_set:
                left += 1
                continue

            char_set.add(s[right])
            max_length = max(max_length, len(char_set))
            continue