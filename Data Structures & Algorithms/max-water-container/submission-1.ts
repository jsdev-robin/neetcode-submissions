class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l: number = 0;
        let r: number = heights.length - 1;
        let best: number = 0;

        while (l < r) {
            let area = Math.min(heights[l], heights[r]) * (r - l);
            best = Math.max(best, area);

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return best;
    }
}
