class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");

        let left: number = 0;
        let right: number = clean.length - 1;

        while (left < right) {
            if (clean[left] !== clean[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}
