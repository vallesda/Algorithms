class Solution {
public:
    string makeGood(string s) {
       int i = 0;
        bool go = true;
        while(go) {
            while(i < s.size()) {
                if ((toupper(s[i]) == s[i + 1] && s[i] != s[i + 1]) || (s[i] == toupper(s[i + 1]) && s[i] != s[i + 1])) {
                    s =  s.substr(0, i) + s.substr(i + 2);
                    i = 0;
                    break;
                }
                i++;
            }
            
            if (i >= s.size()) {
                go = false;
            }
        }
        return s;
    }
};