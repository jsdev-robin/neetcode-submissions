class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let map = new Map<number, number>();

        for (let i: number = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        for (let [num, count] of map) {
            if (count > nums.length / 2) {
                return num;
            }
        }

        return -1;
    }
}
