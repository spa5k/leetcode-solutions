class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_set = set()
        max_length = 0
        current_length = 0
        for i in range(len(s)-1):
            if s[i] in char_set:
                char_set.clear()
                current_length = 0
                continue

            char_set.add(s[i])
            current_length += 1

            max_length = max(current_length, max_length)
        return max_length
