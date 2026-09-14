class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let map = new Map<string, string[]>();

        for (let i: number = 0; i < strs.length; i++) {
            let key = strs[i].split("").sort().join("");

            if (!map.has(key)) {
                map.set(key, []);
            }

            map.get(key).push(strs[i]);
        }

        return [...map.values()];
    }
}
