class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        ROWS, COLS = len(matrix), len(matrix[0])

        rowZero = False

        # determine which rows and columns needs to be zero

        for row in range(ROWS):
            for column in range(COLS):
                if matrix[row][column] == 0:
                    matrix[0][column] = 0
                    if row > 0:
                        matrix[row][0] = 0
                    else:
                        rowZero = True

        for row in range(ROWS):
            for column in range(COLS):
                if matrix[0][column] == 0 or matrix[row][0] == 0:
                    matrix[row][column] = 0

        if matrix[0][0] == 0:
            for i in range(ROWS):
                matrix[i][0] = 0

        if rowZero:
            for c in range(COLS):
                matrix[0][c] = 0
