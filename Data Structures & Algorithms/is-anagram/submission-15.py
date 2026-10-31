class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        map = {}

        for i in range(len(s)):
            map[s[i]] = map.get(s[i], 0) + 1

        for i in range(len(t)):
            map[t[i]] = map.get(t[i], 0) - 1

            if map[t[i]] == 0:
                del map[t[i]]

        return len(map) == 0
