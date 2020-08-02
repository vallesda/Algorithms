class Solution {
public:
    int countGoodTriplets(vector<int>& arr, int a, int b, int c) {
        int count = 0;
        for (int i = 0; i < arr.size(); i++) {
            for (int j = i + 1; j < arr.size(); j++) {
                for (int k = j + 1; k < arr.size(); k++) {
                    int abs1 = abs(arr[i] - arr[j]);
                    int abs2 = abs(arr[j] - arr[k]);
                    int abs3 = abs(arr[i] - arr[k]);
                    
                    if (abs1 <=  a && abs2 <= b && abs3 <= c) {
                        count++;
                    }
                }
            }
        }
        
        return count;
    }
};