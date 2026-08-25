class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let l: number = 0;
        let r: number = nums.length - 1;

        while (l < r) {
            let mid = Math.floor((l + r) / 2);

            if (nums[mid] > nums[r]) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }

        return nums[l];
    }
}
