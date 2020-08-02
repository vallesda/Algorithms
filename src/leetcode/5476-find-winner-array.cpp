class Solution {
public:
    int getWinner(vector<int>& arr, int k) {
        if (arr.size() == 0) {
            return 0;
        }
        
        if (k == 1) {
            return max(arr[0], arr[1]);
        }
    
        int candidate = arr[0];
        int stop = k;
        for (int i = 1; i < arr.size(); i++) {
            stop--;
            
            if (stop == 0 && candidate > arr[i]) {
                return candidate;
            } else if (arr[i] > candidate) {
                stop = k - 1;
                candidate = arr[i];
            }
        }

        return candidate;
    }
};