class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let seen = new Set<number>();

        for (let i of nums) {
            if (seen.has(i)) {
                return true;
            }

            seen.add(i);
        }

        return false;
    }
}
