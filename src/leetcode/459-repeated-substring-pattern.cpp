class Solution {
    public:
        int countFreq(string &pat, string &s) 
        { 
            int M = pat.length(); 
            int N = s.length(); 
            int res = 0; 
    
            for (int i = 0; i < N; i += M) {
                if (pat == s.substr(i, M)) {
                    res++;
                }
            }
            
            return res; 
        } 
        
        bool repeatedSubstringPattern(string s) {
            for (int i = s.size() / 2; i > 0; i--) {
                string pat = s.substr(0, i);
                int c = countFreq(pat, s);
                if (pat.size() * c == s.size()) {
                    return true;
                }
            }
            
            return false;
        }
    };