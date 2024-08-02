class Solution:
    def search(self, nums: List[int], target: int) -> int:
        low = 0
        high = len(nums)-1

        while low <= high:
            middle = low+(high-low)//2
            middle_element = nums[middle]

            if middle_element == target:
                return middle
            elif middle_element < target:
                high = middle-1
            else:
                low = middle+1

