class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x: number): number {
        if (x < 2) {
            return x;
        }

        let l: number = 1;
        let r: number = Math.floor(x / 2);

        while (l <= r) {
            let mid: number = Math.floor((l + r) / 2);

            if (mid * mid === x) {
                return mid;
            } else if (mid * mid < x) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return r;
    }
}
