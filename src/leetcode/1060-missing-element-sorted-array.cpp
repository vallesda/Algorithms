class Solution {
public:
    int missingElement(vector<int>& nums, int k) {
        if (!nums.size()) return 0;
        
        int prev = nums[0];
        
        for (int i = 1; i < nums.size(); i++) {
            int diff = nums[i] - prev;
            
            if (k < diff) {
                return prev + k;
            } else if (k == diff) {
                return nums[i] + 1;
            } else {
               k -= (diff - 1);
                prev = nums[i];
            }
        }
        
        return prev + k;
        
    }
};