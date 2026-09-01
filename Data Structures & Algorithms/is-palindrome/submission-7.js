class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let l = 0;
        let r = clean.length - 1;

        while (l < r) {
            if (clean[l] !== clean[r]) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
