class Solution {
    public:
        vector<vector<int>> merge(vector<vector<int>>& intervals) {
            vector<vector<int>> mergedIntervals;
            
            if (!intervals.size()) return mergedIntervals;
            
            sort(intervals.begin(), intervals.end());       
            vector<int> current = intervals[0];
            for (int i = 1; i < intervals.size(); i++) {
                if (current[1] >= intervals[i][0]) {
                    current[0] = min(current[0], intervals[i][0]);
                    current[1] = max(current[1], intervals[i][1]);
                } else {
                    mergedIntervals.push_back(current);
                    current = intervals[i];
                }
            }
            
            mergedIntervals.push_back(current);
            
            return mergedIntervals;
        }
    };