/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.dp = []
    for(let i=0;i<matrix.length;i++){
        this.dp[i] = Array(matrix[0].length).fill(0)
        for(let j=0;j < matrix[0].length; j++){
            this.dp[i][j+1] = this.dp[i][j] + matrix[i][j]; 
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;
    for (let i = row1; i <= row2; i++) {
        sum += this.dp[i][col2 + 1] - this.dp[i][col1];
    }
    return sum;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */