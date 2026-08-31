class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let window = {};
        let maxLen: number = 0;
        let l: number = 0;
        let maxFreq: number = 0;

        for (let r: number = 0; r < s.length; r++) {
            window[s[r]] = (window[s[r]] || 0) + 1;
            maxFreq = Math.max(maxFreq, window[s[r]]);

            if (r - l + 1 - maxFreq > k) {
                window[s[l]]--;
                l++;
            }

            maxLen = Math.max(maxLen, r - l + 1);
        }

        return maxLen;
    }
}
