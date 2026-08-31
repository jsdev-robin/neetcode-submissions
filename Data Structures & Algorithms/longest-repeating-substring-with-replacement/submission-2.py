class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        window = {}
        maxLen = 0
        l = 0
        maxFreq = 0

        for r in range(len(s)):
            window[s[r]] = window.get(s[r], 0) + 1
            maxFreq = max(maxFreq, window[s[r]])

            if r - l + 1 - maxFreq > k:
                window[s[l]] -= 1
                l += 1

            maxLen = max(maxLen, r - l+1)

        return maxLen
