class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack: string[] = [];
        const map: Record<")" | "}" | "]", string> = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        for (let c of s) {
            if (!map[c]) {
                stack.push(c);
            } else if (stack.pop() !== map[c]) {
                return false;
            }
        }

        return stack.length === 0;
    }
}
