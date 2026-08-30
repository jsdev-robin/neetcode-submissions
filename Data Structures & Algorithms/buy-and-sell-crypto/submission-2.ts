class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit: number = 0;
        let l: number = 0;

        for (let r: number = 0; r < prices.length; r++) {
            if (prices[r] < prices[l]) {
                l = r;
            } else {
                profit = Math.max(profit, prices[r] - prices[l]);
            }
        }

        return profit;
    }
}
