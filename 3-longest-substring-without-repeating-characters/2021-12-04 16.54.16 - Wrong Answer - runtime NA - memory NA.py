class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_set = set()
        max_length = 0
        current_char = 0
        while current_char < len(s):

            if s[current_char] not in char_set:

                char_set.add(s[current_char])
                max_length = max(len(char_set), max_length)

            else:
                char_set.clear()

            current_char += 1
        return max_length
