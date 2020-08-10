class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        int count = 0, answer = 0;
        unordered_map<int,int> hm;
        for (int i = 0; i < nums.size(); i++) {
            int n = nums[i];
            if (n) {
                count++;
            } else {
                count--;
            }
            
            
            if (hm.find(count) != hm.end()) {
                int index = hm[count];
                answer = max(answer, i - index);
            } else {
                hm.emplace(count, i);
            }
            
            if(count == 0) {
                answer = max(answer, i + 1);
            }
        }
        return answer;
    }
};