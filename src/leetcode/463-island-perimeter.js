/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let total = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let c = grid[i][j];
            if (c == 1) {
                total += 4;
                
                if (i != 0 && grid[i - 1][j] == 1) {
                    total -= 1;
                }
                
                if (i != grid.length -1 && grid[i + 1][j] == 1) {
                    total -= 1;
                }
                
                if (j != 0 && grid[i][j - 1] == 1) {
                    total -=1;
                }
                
                if (j != grid[i].length && grid[i][j + 1] == 1) {
                    total -=1;
                }
            }
        }
    }
    return total;
};