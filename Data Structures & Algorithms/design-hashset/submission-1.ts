class MyHashSet {
    size: number;
    buckets: number[][];

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
     * @return {void}
     */
    add(key: number): void {
        const bucket = this.buckets[this._hash(key)];
        if (!bucket.includes(key)) {
            bucket.push(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        const bucket = this.buckets[this._hash(key)];
        let idx = bucket.indexOf(key);

        if (idx !== -1) {
            bucket.splice(idx, 1);
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
        const bucket = this.buckets[this._hash(key)];
        return bucket.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
