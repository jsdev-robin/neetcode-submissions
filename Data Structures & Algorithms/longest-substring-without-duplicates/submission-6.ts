class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let window = new Set<string>();
        let maxLen: number = 0;
        let l: number = 0;

        for (let r: number = 0; r < s.length; r++) {
            while (window.has(s[r])) {
                window.delete(s[l]);
                l++;
            }

            window.add(s[r]);

            maxLen = Math.max(maxLen, r - l + 1);
        }

        return maxLen;
    }
}
