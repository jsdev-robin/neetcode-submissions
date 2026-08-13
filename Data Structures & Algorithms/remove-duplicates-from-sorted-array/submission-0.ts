class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let k: number = 1;

        for (let i: number = 1; i < nums.length; i++) {
            if (nums[i] !== nums[i - 1]) {
                nums[k++] = nums[i];
            }
        }

        return k;
    }
}
