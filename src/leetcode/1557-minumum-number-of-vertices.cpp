class Solution {
public:
    vector<int> findSmallestSetOfVertices(int n, vector<vector<int>>& edges) {
        vector<bool> candidates(n, true);
        vector<int> answer;
        for (int i = 0; i < edges.size(); i++) {
            int visiting = edges[i][1];
            candidates[visiting] = false;
        }
        
        for (int i = 0; i < n; i++) {
            if (candidates[i]) {
                answer.push_back(i);
            }
        }
        
        return answer;
    }
};