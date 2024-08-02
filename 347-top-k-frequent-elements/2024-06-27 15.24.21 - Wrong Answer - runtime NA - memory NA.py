class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        count = Counter(nums)
        heap=[]

        for num, freq in count.items():
            heapq.heappush(heap, (freq, num))
            if (len(heap))>len(count)-k:
                heapq.heappop(heap)

        res=[]

        while heap:
            res.append(heapq.heappop(heap)[1])

        return res