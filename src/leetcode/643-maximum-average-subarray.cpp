class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
        double sum = 0;
        double answer = INT_MIN;
        
        for (int i = 0; i < k; i++) {
            sum += nums[i];
        }
        
        answer = max(answer,  double(sum/k));  
        
        for (int i = k; i < nums.size(); i++) { 
            sum -= nums[i - k];
            sum += nums[i];
            answer = max(answer, double(sum/k));  
        }

        return answer;
    }
};