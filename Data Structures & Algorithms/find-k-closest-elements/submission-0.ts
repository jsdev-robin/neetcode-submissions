class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr: number[], k: number, x: number): number[] {
        let l: number = 0;
        let r: number = arr.length - k;

        while (l < r) {
            let mid: number = Math.floor((l + r) / 2);

            if (x - arr[mid] > arr[mid + k] - x) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }

        return arr.slice(l, l + k);
    }
}
