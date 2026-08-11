class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let prefix: string = strs[0];

        for (let i: number = 1; i < strs.length; i++) {
            while (!strs[i].startsWith(prefix)) {
                prefix = prefix.slice(0, -1);
                if (!prefix) {
                    return "";
                }
            }
        }

        return prefix;
    }
}
