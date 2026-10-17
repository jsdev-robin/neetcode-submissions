class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let map = new Map<string, string[]>()

        for(let i: number = 0;i < strs.length;i++) {
            let str = strs[i].split("").sort().join("");
            if(!map.has(str)) {
                map.set(str, [])
            }

            map.get(str).push(strs[i]);
        }



        return Array.from(map.values());
    }
}
