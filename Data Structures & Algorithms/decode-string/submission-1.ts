class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s: string): string {
        let stack: [string, number][] = [];
        let curStr: string = "";
        let curNum: number = 0;

        for (let c of s) {
            if (c >= "0" && c <= "9") {
                curNum = curNum * 10 + parseInt(c);
            } else if (c === "[") {
                stack.push([curStr, curNum]);
                curStr = "";
                curNum = 0;
            } else if (c === "]") {
                const [prevStr, num] = stack.pop();
                curStr = prevStr + curStr.repeat(num);
            } else {
                curStr += c;
            }
        }

        return curStr;
    }
}
