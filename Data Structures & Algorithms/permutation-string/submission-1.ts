class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) {
            return false;
        }

        let need: number[] = new Array(26).fill(0);
        let window: number[] = new Array(26).fill(0);
        let a = "a".charCodeAt(0);

        for (let c of s1) {
            need[c.charCodeAt(0) - a]++;
        }

        let l: number = 0;

        for (let r: number = 0; r < s2.length; r++) {
            window[s2.charCodeAt(r) - a]++;

            if (r - l + 1 > s1.length) {
                window[s2.charCodeAt(l) - a]--;
                l++;
            }

            if (r - l + 1 === s1.length && need.every((v, i) => v === window[i])) {
                return true;
            }
        }

        return false;
    }
}
