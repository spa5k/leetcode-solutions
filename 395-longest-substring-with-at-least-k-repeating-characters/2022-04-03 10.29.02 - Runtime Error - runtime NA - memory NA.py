class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        from collections import Counter

        total_uniques = len(Counter(s))
        res = 0
        for no_uniques in range(1, total_uniques + 1):

            s = 0
            e = 0

            curr_sub = Counter()

            while e < len(s):
                curr_sub[s[e]] += 1
                while len(curr_sub) > no_uniques:
                    curr_sub[str[s]] -= 1
                    if curr_sub[str[s]] == 0:
                        del curr_sub[str[s]]
                    s += 1

                for key in curr_sub:
                    if curr_sub[key] < k:
                        break
                else:
                    res = max(res, e - s + 1)
                e += 1
        return res
