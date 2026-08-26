class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        dist = {}

        for i in range(len(nums)):
            if nums[i] in dist and i - dist[nums[i]] <= k:
                return True

            dist[nums[i]] = i
        
        return False
        