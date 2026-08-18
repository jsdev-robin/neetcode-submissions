class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids: number[]): number[] {
        let stack: number[] = [];

        for (let a of asteroids) {
            let destory = false;
            while (stack.length > 0 && a < 0 && stack[stack.length - 1] > 0) {
                let top = stack[stack.length - 1];
                if (top < -a) {
                    stack.pop();
                } else if (top === -a) {
                    stack.pop();
                    destory = true;
                    break;
                } else {
                    destory = true;
                    break;
                }
            }

            if (!destory) {
                stack.push(a);
            }
        }
        return stack;
    }
}
