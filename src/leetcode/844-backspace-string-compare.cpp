class Solution {
public:
    bool backspaceCompare(string S, string T) {
        string s1 = generate(S);
        string t1 = generate(T);
        return s1 == t1;
    }
    
    string generate(string s) {
        string text = "";
        for (char c : s) {
            if (text.size() && c == '#') {
                text.pop_back();
            } else if (c != '#') {
                text.push_back(c);
            }
        }
        return text;
    }
};