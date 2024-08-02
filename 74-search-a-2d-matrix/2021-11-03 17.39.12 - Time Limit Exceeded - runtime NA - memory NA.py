class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:

        for row in matrix:
            l = 0
            r = len(row)-1

            while l <= r:
                if target > row[l] and target < row[r]:
                    # it means that the value is inside
                    middle = (l+r)//2

                    if target == row[middle]:
                        return True

                    if target < row[middle]:
                        r = middle-1
                    else:
                        l = middle+1
                else:
                    continue