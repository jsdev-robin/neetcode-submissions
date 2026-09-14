class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = {}

        for i in range(len(strs)):
            key = "".join(sorted(strs[i]))

            if key not in map:
                map[key] = []
            
            map[key].append(strs[i])

        return list(map.values())
