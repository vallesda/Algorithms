class Solution {
public:
    int maxSum(vector<int>& nums1, vector<int>& nums2) {
        vector<long long int> sums1 = sumArrays(nums1);
        vector<long long int> sums2 = sumArrays(nums2);
        long long int score = 0;
        long mod = 1e9 + 7;
        
        unordered_map<int,int> seen;
        
        for (int i = 0; i < nums1.size(); i++) {
            seen.emplace(nums1[i], i);
        }
        
        int pp1 = -1;
        int pp2 = -1;
        int k = 0;
                        
        long long int sum1 = 0;
        long long int sum2 = 0;
        for (int i = 0; i < nums2.size(); i++) {
            int currentNum = nums2[i];
            if (seen.find(currentNum) != seen.end()) {
                int pos1 = seen[currentNum];
                int pos2 = i;
                
                if (pp1 == -1) {
                    sum1 = sums1[pos1];
                } else {
                    sum1 = sums1[pos1] - sums1[pp1];
                }
                
                if (pp2 == -1) {
                    sum2 = sums2[pos2];
                } else {
                    sum2 = sums2[pos2] - sums2[pp2];
                }
                
                    
                score += max(sum1, sum2);
                
                pp1 = pos1;
                pp2 = pos2;
            }
        }

        if (pp1 == -1) {
            sum1 = sums1[nums1.size() - 1];
        } else if (pp1 <= nums1.size() - 1) {
            sum1 = sums1[nums1.size() - 1] - sums1[pp1];
        } else {
            sum1 = 0;
        }

        if (pp2 == -1) {
            sum2 = sums2[nums2.size() - 1];
        } else if(pp2 <= nums2.size() - 1) {
            sum2 = sums2[nums2.size() - 1] - sums2[pp2];
        } else {
            sum2 = 0;
        }
        
        score += max(sum1, sum2);
        
        return score % mod;
    }
    
    vector<long long int> sumArrays(vector<int> arr) {
        vector<long long int> sum;
        long long int s = 0;
        for (int i = 0; i < arr.size(); i++) {
            s += arr[i];
            sum.push_back(s);
        }
        return sum;
    }
};