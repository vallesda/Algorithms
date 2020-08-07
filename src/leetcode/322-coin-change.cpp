class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        sort(coins.begin(), coins.end());
        vector<int> dp(amount + 1, INT_MAX);
        dp[0] = 0;
        
        for (int i = 1; i <= amount; i++) {
            for (int j = 0; j < coins.size(); j++) {
                int com = i - coins[j];
                
                if (com > 0) {
                    if (dp[com] != INT_MAX) {
                        dp[i] = min(dp[com] + 1, dp[i]);
                    }
                }
                
                if (com == 0) {
                    dp[i] = 1;
                }
            }
        }
        
        return dp[amount] != INT_MAX ? dp[amount] : -1;
    }
};