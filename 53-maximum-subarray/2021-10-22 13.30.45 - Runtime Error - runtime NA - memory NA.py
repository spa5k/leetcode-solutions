class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        left = 0
        right = nums[0]

        for i, item in nums:
            left = max(item, nums[i+1])
            right = max(left, right)

        return right

