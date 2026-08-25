class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights: number[], days: number): number {
        let l: number = Math.max(...weights);
        let r: number = weights.reduce((a, b) => a + b, 0);

        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            let dayNeeded: number = 1;
            let curLoad: number = 0;

            for (let w of weights) {
                if (curLoad + w > mid) {
                    dayNeeded++;
                    curLoad = 0;
                }

                curLoad += w;
            }

            if (dayNeeded <= days) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }

        return l;
    }
}
