class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
            n, m = len(s1), len(s2)
            if n > m:
                return False

            hash_s1 = {}
            for i in range(len(s1)):
                letter = s1[i]
                if letter in hash_s1:
                    hash_s1[letter] += 1
                else:
                    hash_s1[letter] = 1

            last = False
            last_second = False

            for i in range(len(s2)):
                letter = s2[i]
                # print(letter, "  ", hash_s1, last, last_second)

                if letter in hash_s1:
                    if hash_s1[letter] == 1:
                        hash_s1.pop(letter)
                    else:
                        hash_s1[letter] -= 1

                    if last == True:
                        last_second = True
                    else:
                        last = True

                else:
                    if len(hash_s1) == 0 and last == True and last_second == True:
                        return True
                    if n == 1 and last == True:
                        return True
                    last = False
                    last_second = False
            return False