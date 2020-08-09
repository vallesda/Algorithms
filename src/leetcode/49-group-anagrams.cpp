class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        map<string, vector<string>> hm;
        vector<vector<string>> ans;
        for (string s : strs) {
            string s2 = s;
            sort(s.begin(), s.end());
            hm[s].push_back(s2);
        }
        
        for(auto it : hm) {
            ans.push_back(it.second);
        }
        
        return ans;
    }
};