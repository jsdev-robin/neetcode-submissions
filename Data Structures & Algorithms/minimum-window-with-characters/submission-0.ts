class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (t.length > s.length) {
            return "";
        }
        let need = {};

        for (let c of t) {
            need[c] = (need[c] || 0) + 1;
        }

        let required = Object.keys(need).length;
        let window = {};
        let formed = 0;
        let resLen = Infinity;
        let resl = 0;
        let l = 0;

        for (let r: number = 0; r < s.length; r++) {
            let c = s[r];
            window[c] = (window[c] || 0) + 1;
            if (need[c] && need[c] === window[c]) {
                formed++;
            }

            while (formed === required) {
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    resl = l;
                }

                let lc = s[l];
                window[lc]--;

                if (need[lc] && window[lc] < need[lc]) {
                    formed--;
                }
                l++;
            }
        }

        return resLen === Infinity ? "" : s.substring(resl, resl + resLen);
    }
}
