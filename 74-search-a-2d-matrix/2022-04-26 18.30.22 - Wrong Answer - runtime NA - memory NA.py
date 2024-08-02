from typing import List


class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:

        for row in matrix:
            l = 0
            r = len(row) - 1
            if row[l] >= target and row[l] <= target:

                while l <= r:
                    m = (l + r) // 2

                    if row[m] == target:
                        return True
                    if row[m] < target:
                        l = m + 1
                    else:
                        r = m - 1
            return False


print(Solution.searchMatrix(Solution, [[1]], 1))