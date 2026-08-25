class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let l: number = 1;
        let r: number = Math.max(...piles);

        while (l < r) {
            let mid: number = Math.floor((l + r) / 2);
            let hours: number = piles.reduce((a, b) => a + Math.ceil(b / mid), 0);

            if (hours <= h) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }

        return l;
    }
}
