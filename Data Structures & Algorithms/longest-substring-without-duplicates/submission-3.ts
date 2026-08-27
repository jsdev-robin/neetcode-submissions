class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let set = new Set();
        let l: number = 0;
        let best: number = 0;

        for (let r: number = 0; r < s.length; r++) {
            while (set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }

            set.add(s[r]);
            best = Math.max(best, r - l + 1);
        }

        return best;
    }
}
