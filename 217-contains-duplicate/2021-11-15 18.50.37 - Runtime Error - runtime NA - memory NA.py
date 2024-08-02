class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        for i in range(len(nums)-1):
            num = nums[i-1]
            print(num)

            if num < 0:
                return True

            nums[num-1] *= -1

        return False