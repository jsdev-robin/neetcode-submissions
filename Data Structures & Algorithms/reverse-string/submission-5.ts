class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        let l: number = 0;
        let r: number = s.length - 1;

        while (l < r) {
            [s[l], s[r]] = [s[r], s[l]];
            l++;
            r--;
        }
    }
}
