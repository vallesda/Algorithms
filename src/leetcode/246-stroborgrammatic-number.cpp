class Solution {
public: 
    unordered_map<char,char> mp;
    bool isStrobogrammatic(string num) {
        mp.emplace('6', '9');
        mp.emplace('9', '6');
        mp.emplace('8', '8');
        mp.emplace('1', '1');
        mp.emplace('0', '0');
        int start = 0, end = num.size() - 1;
        while(start <= end) {
            char s = num[start];
            char e = num[end];
            if (mp.count(s) && mp.count(e) && mp[s] == e) {
                start++;
                end--;
            } else {
                return false;
            }
        }
        return true;
    }
};