class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        count = {}

        for i in range(len(s)):
            count[s[i]] = count.get(s[i], 0) + 1

        for i in range(len(t)):
            if t[i] not in count:
                return False
            count[t[i]] = count.get(t[i], 0) - 1

            if count[t[i]] == 0:
                del count[t[i]]

        return len(count) == 0
