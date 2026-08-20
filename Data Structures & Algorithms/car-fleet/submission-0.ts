class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        let cars: number[][] = position.map((p, i) => [p, speed[i]]).sort((a, b) => b[0] - a[0]);
        let stack: number[] = [];

        for (let [p, s] of cars) {
            let time = (target - p) / s;

            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
        }

        return stack.length;
    }
}
