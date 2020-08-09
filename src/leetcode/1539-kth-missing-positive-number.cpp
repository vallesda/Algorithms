class Solution {
public:
    int findKthPositive(vector<int>& arr, int k) {
        if (arr.size() == 0) return 1;
        set<int> hm;
        int last = arr[arr.size() - 1];
        
        for (int i = 0; i < arr.size(); i++) {
            hm.emplace(arr[i]);
        }
        
        for (int i = 1; i < last; i++) {
            if (hm.find(i) == hm.end()) {
                k -= 1;
            }
            
            if (k <= 0) {
                return i;
            }
        }
        
        return last + k;
    }
};