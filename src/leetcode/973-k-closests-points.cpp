class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int K) {
        typedef pair<int,pair<int,int>>pi;
        priority_queue<pi> heap;
        vector<vector<int>> answer;
        
        for (int i = 0; i < points.size(); i++) {
            int distance = points[i][0] * points[i][0] + points[i][1] * points[i][1];
            heap.push({distance, {points[i][0], points[i][1]}});
            if (heap.size() > K) {
                heap.pop();
            }
        }
        
        while(heap.size() != 0) {
            int x = heap.top().second.first;
            int y = heap.top().second.second;
            answer.push_back({x, y});
            heap.pop();
        }
        
        return answer;
    }
};