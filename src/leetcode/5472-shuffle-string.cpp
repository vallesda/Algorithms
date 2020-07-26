class Solution {
public:
    string restoreString(string s, vector<int>& indices) {
        string newString = s;
        for (int i = 0; i < s.size(); i++) {
            int pos = indices[i];    
            newString[pos] = s[i];
        }

        return newString;
    }
};