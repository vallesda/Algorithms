class Solution {
public:
    string thousandSeparator(int n) {
        string s = to_string(n);
        string a = "";
        
        int count = 0;
        for (int i = s.size() - 1; i >= 0; i--) {
            count++;
            a.push_back(s[i]);
            if (i != 0 && i != s.size() - 1 && count % 3 == 0) {
                a.push_back('.');
            }
        }
        
        reverse(a.begin(), a.end());
        
        return a;
    }
};