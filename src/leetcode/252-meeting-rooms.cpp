class Solution {
public:
    bool canAttendMeetings(vector<vector<int>>& intervals) {
        if (!intervals.size()) return true;
        
        sort(intervals.begin(), intervals.end());
        vector<int> current = intervals[0];
        
        for (int i = 1; i < intervals.size(); i++) {
            if (current[1] > intervals[i][0]) {
                return false;
            }
            
            current = intervals[i];
        }
        
        return true;
    }
};