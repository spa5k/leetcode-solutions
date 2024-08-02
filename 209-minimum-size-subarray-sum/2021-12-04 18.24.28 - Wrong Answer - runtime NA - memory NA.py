class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left = 0
        right = 1
        current = nums[0]
        min_length = len(nums)

        while right < len(nums):
            current += nums[right]
            if current < target:
                right += 1
            elif current == target or current > target:
                min_length = min(min_length, right-left)
                left = right
                right += 1

        return min_length

