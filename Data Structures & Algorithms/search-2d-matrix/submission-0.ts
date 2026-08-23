class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let m: number = matrix.length;
        let n: number = matrix[0].length;
        let l: number = 0;
        let r: number = m * n - 1;

        while (l <= r) {
            let mid: number = Math.floor((l + r) / 2);
            let val: number = matrix[Math.floor(mid / n)][mid % n];

            if (val === target) {
                return true;
            } else if (val < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return false;
    }
}
