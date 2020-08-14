class Solution {
public:
    struct Pos {
        int i;
        int j;
        int v;
    };
    
    struct customCompare {
        bool operator()(const Pos& a, const Pos& b) {
            return a.v < b.v;
        }
    };
    
    int maximumMinimumPath(vector<vector<int>>& A) {
        priority_queue<Pos, vector<Pos>, customCompare> pq;
        vector<vector<bool>> visited(A.size(), vector<bool>(A[0].size(), false));
        Pos first;
        first.i = 0;
        first.j = 0;
        first.v = A[0][0];
        visited[0][0] = true;
        int answer = A[0][0];
        pq.push(first);
        
        while(pq.size()) {
            Pos current = pq.top();
            pq.pop();
            answer = min(answer, current.v);
            Pos n;
            
            
            if (current.i == A.size() - 1 && current.j == A[current.i].size() - 1) {
                return answer; // finish condition
            }
            
            if (current.i < A.size() - 1 && !visited[current.i + 1][current.j]) {
                visited[current.i + 1][current.j] = true;
                n.i = current.i + 1;
                n.j = current.j;
                n.v = A[current.i + 1][current.j];
                pq.push(n);
            }
            
            if (current.i >= 1 && !visited[current.i - 1][current.j]) {
                visited[current.i - 1][current.j] = true;
                n.i = current.i - 1;
                n.j = current.j;
                n.v = A[current.i - 1][current.j];
                pq.push(n);
            }
            
            if (current.j < A[current.i].size() - 1 && !visited[current.i][current.j + 1]) {
                visited[current.i][current.j + 1] = true;
                n.i = current.i;
                n.j = current.j + 1;
                n.v = A[current.i][current.j + 1];
                pq.push(n);
            }
            
            if (current.j >= 1 && !visited[current.i][current.j - 1]) {
                visited[current.i][current.j - 1] = true;
                n.i = current.i;
                n.j = current.j - 1;
                n.v = A[current.i][current.j - 1];
                pq.push(n);
            }
            
        }
        
        
        return answer;
    }
};