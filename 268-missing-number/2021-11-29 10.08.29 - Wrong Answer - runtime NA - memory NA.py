class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        res = len(nums)
        sum1 = 0

        for i in range(res-1):
            sum1 += i

        return sum1-sum(nums)

