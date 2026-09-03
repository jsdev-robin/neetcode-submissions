class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        let deque = [];
        let res = [];

        for (let r: number = 0; r < nums.length; r++) {
            while (deque.length && nums[deque[deque.length - 1]] < nums[r]) {
                deque.pop();
            }
            deque.push(r);

            if (deque[0] <= r - k) {
                deque.shift();
            }

            if (r >= k - 1) {
                res.push(nums[deque[0]]);
            }
        }

        return res;
    }
}
