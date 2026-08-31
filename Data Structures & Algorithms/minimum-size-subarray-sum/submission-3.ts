class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {
        let l = 0,
            sum = 0,
            minLen = Infinity;

        for (let r: number = 0; r < nums.length; r++) {
            sum += nums[r];

            while (sum >= target) {
                minLen = Math.min(minLen, r - l + 1);
                sum -= nums[l];
                l++;
            }
        }

        return minLen === Infinity ? 0 : minLen;
    }
}
