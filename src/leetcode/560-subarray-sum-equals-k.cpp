class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        unordered_map<int, int> hm;
        hm.emplace(0, 1);
        
        int count = 0, sum = 0;
        for (int i = 0; i < nums.size(); i++) {
            sum += nums[i];
            int target = sum - k;
            
            if (hm.find(target) != hm.end()) {
                count += hm[target];
            }
            
            hm[sum]++;
        }
        
        return count;
    }
};