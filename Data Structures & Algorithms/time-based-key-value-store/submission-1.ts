class TimeMap {
    private keyStore: Map<string, [number, string][]>;
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        if (!this.keyStore.has(key)) {
            return "";
        }
        const arr = this.keyStore.get(key);
        let l: number = 0;
        let r: number = arr.length - 1;
        let res: string = "";

        while (l <= r) {
            let mid: number = Math.floor((l + r) / 2);

            if (arr[mid][0] <= timestamp) {
                res = arr[mid][1];
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return res;
    }
}
