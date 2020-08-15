class Solution {
public:
    void floodFill(vector<vector<int>>& grid,
                vector<vector<bool>>& visited,
                int r,
                int c,
                int color,
                int target,
                int n,
                int m) {
        if (r < 0 || c < 0 || c >= m || r >= n) return;
        if (visited[r][c]) return;
        if (grid[r][c] != target) return;
        
        visited[r][c] = true;
        
        if (grid[r][c] == target) {
            if (r == n - 1 || c == m - 1 || r == 0 || c == 0 ||
                (grid[r + 1][c] != target && !visited[r + 1][c]) ||
                (grid[r - 1][c] != target && !visited[r - 1][c]) ||
                (grid[r][c + 1] != target && !visited[r][c + 1]) ||
                (grid[r][c - 1] != target && !visited[r][c - 1])
             ) {
               grid[r][c] = color; 
            } 
            floodFill(grid,visited, r + 1, c, color, target, n, m);
            floodFill(grid,visited, r - 1, c, color, target, n, m);
            floodFill(grid,visited, r, c + 1, color, target, n, m);
            floodFill(grid,visited, r, c - 1, color, target, n, m);
        }
    }
    
    vector<vector<int>> colorBorder(vector<vector<int>>& grid, int r0, int c0, int color) {
        int n = grid.size(), m = grid[0].size();
        vector<vector<bool>> visited(n, vector<bool>(m, false));
        
        floodFill(grid, visited, r0, c0, color, grid[r0][c0], n, m);
        return grid;
    }
};