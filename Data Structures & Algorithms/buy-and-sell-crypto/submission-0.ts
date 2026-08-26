class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice: number = Infinity;
        let profit = 0;

        for (let p of prices) {
            if (p < minPrice) {
                minPrice = p;
            } else if (p - minPrice > profit) {
                profit = p - minPrice;
            }
        }

        return profit;
    }
}
