class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people: number[], limit: number): number {
        people.sort((a, b) => a - b);

        let l: number = 0;
        let r: number = people.length - 1;
        let boat: number = 0;

        while (l <= r) {
            if (people[l] + people[r] <= limit) {
                l++;
            }
            r--;
            boat++;
        }

        return boat;
    }
}
