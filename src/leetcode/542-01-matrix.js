/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    

    let answer = new Array(row).fill().map(() => new Array(col).fill(Infinity));

    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === 0) {
                answer[i][j] = 0;
            } else {
                if (i > 0) {
                    answer[i][j] = Math.min(answer[i][j], answer[i-1][j] + 1);
                }
                
                if (j > 0) {
                    answer[i][j] = Math.min(answer[i][j], answer[i][j-1] + 1);
                }
            }
        }
    }

    console.log(answer);

    for (let i = row - 1; i >= 0; i--) {
        for (let j = col - 1; j >= 0; j--) {
            if (i < row - 1) {
                answer[i][j] = Math.min(answer[i][j], answer[i+1][j] + 1);
            }

            if (j < col - 1) {
                answer[i][j] = Math.min(answer[i][j], answer[i][j+1] + 1);
            }

        }
    }
    
    return answer;
};