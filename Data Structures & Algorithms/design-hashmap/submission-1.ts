class MyHashMap {
    size: number;
    buckets: number[][][];

    constructor() {
        this.size = 1000;
        this.buckets = [];
        for (let i: number = 0; i < this.size; i++) {
            this.buckets.push([]);
        }
    }

    _hash(key: number): number {
        return key % this.size;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        let bucket: number[][] = this.buckets[this._hash(key)];

        for (let i: number = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }

        bucket.push([key, value]);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        let bucket: number[][] = this.buckets[this._hash(key)];

        for (let i: number = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }

        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        const bucket = this.buckets[this._hash(key)];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return;
            }
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
