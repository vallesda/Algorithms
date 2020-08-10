class Solution {
public:
    string stringShift(string s, vector<vector<int>>& shift) {
        int n = s.size();  
        int count = getCount(n, shift);
        int index = calculateStart(count, n);
        return s.substr(n - index) + s.substr(0, n - index);
    }
    
    int getCount(int n, vector<vector<int>>& shift) {
        int count = 0;
        for (vector<int> pp : shift) {
            if (pp[0] == 0) {
              count -= pp[1];
            } else {
              count += pp[1];
            }
        }
        return count % n;
    }
    
    int calculateStart(int count, int n) {
        if (count >= 0) return count;
        return n + count;
    }
};