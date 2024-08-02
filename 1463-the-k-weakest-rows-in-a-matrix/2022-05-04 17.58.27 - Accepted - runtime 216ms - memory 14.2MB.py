class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        ans = []

        for i, row in enumerate(mat):
            r = self.bs(row)
            ans.append((i, r))
        ans.sort(key=lambda x: (x[1], x[0]))
        return [x[0] for x in ans[:k]]

    def bs(self, row):
        start = 0
        end = len(row)-1
        if start > end:
            return

        l, r = start, end

        while l <= r:
            mid = (l+r)//2

            if row[mid] == 1:
                l = mid+1
            elif row[mid] == 0:
                r = mid-1
        if r < 0 or row[r] != 1:
            return -1
        return r