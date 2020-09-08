class Solution {
public:
    string convertTime(int time) {
        int hours = time / 60;
        int mins = time % 60;
        
        string h = to_string(hours);
        string m = to_string(mins);
        
        if (h.size() != 2) {
            h = "0" + h;
        }
        
        if (m.size() != 2) {
            m = "0" + m;
        }
        return h + ":" + m;
    }
    
    string largestTimeFromDigits(vector<int>& A) {
        int maxValidTime = -1;
        sort(A.begin(), A.end());
        
        do {
            int hour = A[0] * 10 + A[1];
            int minute = A[2] * 10 + A[3];
            
            if (hour < 24 && minute < 60) {
                int time = hour * 60 + minute;
                maxValidTime = max(maxValidTime, time);
            }
        } while (next_permutation(A.begin(), A.end()));
        
        if (maxValidTime == -1) return "";
        
        return convertTime(maxValidTime);
    }
};