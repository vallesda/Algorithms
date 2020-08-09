class Solution {
public:
    int countElements(vector<int>& arr) {
        set<int> s;
        for (int n : arr) {
            s.insert(n);
        }
        
        int answer = 0;
        for (int n : arr) {
            if (s.count(n + 1) != 0) {
                answer += 1;
            }
        }
        
        return answer;
    }
};