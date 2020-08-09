class Solution {
public:
    char findKthBit(int n, int k) {
        string s = "0";
        for (int i = 1; i < n; i++) {
            string n1 = calculate(s);
            s += n1;
        }
        
        return s[k - 1];
    }
    
    string calculate(string prev) {
        string n = "";
        for (int i = 0; i < prev.size(); i++) {
            if (prev[i] == '0') {
                n.push_back('1');
            } else {
                n.push_back('0');
            }
        }
        
        n.push_back('1');
        
        reverse(n.begin(), n.end());
        
        return n;
    }
};