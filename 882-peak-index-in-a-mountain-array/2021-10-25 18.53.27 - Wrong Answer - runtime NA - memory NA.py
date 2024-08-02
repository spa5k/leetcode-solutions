class Solution:
    def peakIndexInMountainArray(self, nums: List[int]) -> int:
        left = 0
        right = len(nums)-1

        while left < right:
            middle = left+(right-left)//2
            middle_ele = nums[middle]

            if middle_ele < nums[middle-1]:
                left = middle+1
            else:
                right = middle
        return left