class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        let map = new Map<string, number>();

        for (let i: number = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1);
        }

        for (let i: number = 0; i < t.length; i++) {
            map.set(t[i], (map.get(t[i]) || 0) - 1);

            if (map.get(t[i]) === 0) {
                map.delete(t[i]);
            }
        }

        return map.size === 0;
    }
}
