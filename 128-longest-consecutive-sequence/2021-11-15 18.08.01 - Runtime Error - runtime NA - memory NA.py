from typing import List


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        arr = [-1 for i in range(len(nums))]

        for i in range(len(nums)-1):
            number = nums[i]
            arr[number] = number

        max_num = 0
        last = -1
        for i in arr:
            if last+1 == i:
                max_num += 1

            last = i
        return max_num

