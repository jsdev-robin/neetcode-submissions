class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack: number[] = [];
        let ops = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b),
        };

        for (let t of tokens) {
            if (ops[t]) {
                let b = stack.pop();
                let a = stack.pop();

                stack.push(ops[t](a, b));
            } else {
                stack.push(Number(t));
            }
        }

        return stack[0];
    }
}
