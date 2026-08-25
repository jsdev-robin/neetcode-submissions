class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        l = max(weights)
        r = sum(weights)

        while l < r:
            mid = (l + r) // 2
            needed_days = 1
            current = 0

            for w in weights:
                if current + w > mid:
                    needed_days += 1
                    current = 0

                current += w

            if needed_days <= days:
                r = mid
            else:
                l = mid + 1

        return l
