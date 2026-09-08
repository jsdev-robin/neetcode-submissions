class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        let count = new Map<string, number>();

        for (let i: number = 0; i < s.length; i++) {
            count.set(s[i], (count.get(s[i]) || 0) + 1);
        }

        for (let i: number = 0; i < t.length; i++) {
            if (!count.has(t[i])) {
                return false;
            }

            count.set(t[i], (count.get(t[i]) || 0) - 1);

            if (count.get(t[i]) === 0) {
                count.delete(t[i]);
            }
        }

        return count.size === 0;
    }
}
