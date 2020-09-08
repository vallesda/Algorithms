class Solution {
public:    
    string modifyString(string s) {
       if (s.size() == 1 && s[0] == '?') return "a"; 
        
       for (int i = 0; i < s.size(); i++) {
           if (s[i] == '?') {
               char c = 'a';
               while (i == 0 && s[i + 1] == c) {
                   c += 1;
               }
               
               while (i == s.size() - 1 && s[i - 1] == c) {
                   c += 1;
               }
               
               while (i != 0 && i != s.size() - 1 && (s[i-1] == c || s[i+1] == c)) {
                   c += 1;
               }
               s[i] = c;
           }
       }
       return s;
    }
};