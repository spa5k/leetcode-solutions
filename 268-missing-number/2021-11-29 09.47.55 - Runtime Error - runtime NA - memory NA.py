class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        max_num = len(nums)

        for i in range(len(nums)-1):
            num = nums[i]

            if num < 0:
                return num

            nums[num] *= -1
