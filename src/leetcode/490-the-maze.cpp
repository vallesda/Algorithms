class Solution {
public:
    bool hasPath(vector<vector<int>>& maze, vector<int>& start, vector<int>& destination) {
        int i = start[0], y = start[1];
        vector<vector<bool>> visited(maze.size(), vector<bool>(maze[0].size(), false));
        return moveToStop(maze, visited, {i, y}, destination);
    }
    
    bool moveToStop(vector<vector<int>>& maze, vector<vector<bool>> &visited, vector<int>pos, vector<int>&destination) {
        int i = pos[0], j = pos[1];
        int ei = destination[0], ej = destination[1];
        
        if (visited[i][j]) {
            return false;
        }
        
        if (i == ei && j == ej) {
            return true;
        }
        
        visited[i][j] = true;
        
        
        while(j < maze[i].size() && maze[i][j] == 0) { // left
            j++;
        }
        if (moveToStop(maze, visited, {i, j - 1}, destination)) {
            return true;
        }
        
        i = pos[0], j = pos[1];
        while(j >= 0 && maze[i][j] == 0) { // right
            j--;
        }
        if (moveToStop(maze, visited, {i, j + 1}, destination)) {
            return true;
        }
        
        i = pos[0], j = pos[1];
        while(i >= 0 && maze[i][j] == 0) { // top
            i--;
        }
        if (moveToStop(maze, visited, {i + 1, j}, destination)) {
            return true;
        }
        
        i = pos[0], j = pos[1];
        while(i < maze.size() && maze[i][j] == 0) { // bottom
            i++;
        }
        if (moveToStop(maze, visited, {i - 1, j}, destination)) {
            return true;
        }
        
        return false;
    }
};