class Solution {
public:
    int isPalindrome(string &s, int i, int j) {
        int start = i;
        int end = j;

        while(start < end) {
            while(start < end && !isalnum(s[start]) ) {
                start++;
            }

            while(start < end && !isalnum(s[end]) ) {
                end--;
            }

            if (tolower(s[start]) != tolower(s[end])) {
                return start;
            }

            start++;
            end--;
        }

        return -1;
    }  
    
    bool validPalindrome(string s) {
        int t = isPalindrome(s, 0, s.size() - 1);
        if (t == -1) return true;
        return isPalindrome(s, t + 1, s.size() - t - 1) == -1 || isPalindrome(s, t, s.size() - t - 2) == -1;  
    }
};