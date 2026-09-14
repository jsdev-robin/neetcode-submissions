class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let count: number = 0;
        let candidate = null;

        for (let i: number = 0; i < nums.length; i++) {
            if (count === 0) {
                candidate = nums[i];
            }

            if (nums[i] === candidate) {
                count++;
            } else {
                count--;
            }
        }

        return candidate
    }
}
