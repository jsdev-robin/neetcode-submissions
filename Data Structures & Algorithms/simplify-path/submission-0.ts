class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path: string): string {
        let stack: string[] = [];
        let parts: string[] = path.split("/");

        for (let part of parts) {
            if (part === "..") {
                stack.pop();
            } else if (part && part !== ".") {
                stack.push(part);
            }
        }

        return "/" + stack.join("/");
    }
}
