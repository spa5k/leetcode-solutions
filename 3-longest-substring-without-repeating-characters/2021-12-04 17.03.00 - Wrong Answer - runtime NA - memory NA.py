class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_set = set()
        max_length = 0
        # left = 0
        right = 1

        for i in range(len(s)-1):
            if s[i] not in char_set:
                char_set.add(s[i])
                right += 1
            else:
                char_set.remove(s[i])
                # left = right

            max_length = max(len(char_set), max_length)
        return max_length