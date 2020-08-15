class Solution {
public:
    int findJudge(int N, vector<vector<int>>& trust) {
        vector<bool> candidates(N, true);
        vector<int> likes(N, 0);       
        for (vector<int> t : trust) {
            int a = t[0], b = t[1];
            candidates[a-1] = false;
            likes[b-1] += 1;
        }
        
        for (int i = 0; i < N; i++) {
            if (candidates[i] && likes[i] == N - 1) return i + 1;
        }
        return -1;
    }
};