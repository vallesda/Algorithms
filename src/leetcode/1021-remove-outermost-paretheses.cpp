class Solution {
public:    
    string removeOuterParentheses(string S) {
        int count = 1, pos = 1, init = 0;
        string value = "";
        while (pos < S.size()) {
            if (S[pos] == ')') {
                count--;
            } else {
                count++;
            }
            
            if (count == 0) {
                value += S.substr(init + 1, pos - init - 1);
                init = pos + 1;
            }
            
            pos++;
        }
        
        return value;
    }
};