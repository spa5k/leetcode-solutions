class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res=[]
        nums.sort()

        for i,a in enumerate(nums):
            if i >0 and a ==nums[i-1]:
              continue

            l,r=i+1,len(nums)-1

            while l<r:
              three_sum=a+nums[l]+nums[r]

              if three_sum==0:
                  res.append([a,nums[l],nums[r]])
              elif three_sum >0:
                r-=1
              else:
                l+=1
        return res