class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let clean: string = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let l: number = 0;
        let r: number = clean.length - 1;

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
