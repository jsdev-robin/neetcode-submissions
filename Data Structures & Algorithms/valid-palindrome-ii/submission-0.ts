class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        function isPlain(l: number, r: number) {
            while (l < r) {
                if (s[l] !== s[r]) {
                    return false;
                }
                l++;
                r--;
            }

            return true;
        }

        let left: number = 0;
        let right: number = s.length - 1;

        while (left < right) {
            if (s[left] !== s[right]) {
                return isPlain(left + 1, right) || isPlain(left, right - 1);
            }

            left++;
            right--;
        }

        return true;
    }
}
