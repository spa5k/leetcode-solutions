class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        hash1 = {}
        for i, num in enumerate(s1):
            if num in hash1:
                hash1[num] = hash1[num] + 1
            else:
                hash1[num] = 1

        for i, st in enumerate(s2):
            if st in hash1:
                if hash1[st] == 1:
                    hash1.pop(st)
                else:
                    hash1[st] = hash1[st] - 1

            if len(hash1) == 0:
                return True
        return False