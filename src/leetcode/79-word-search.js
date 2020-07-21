/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (!board || !word) {
        return false;
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (dfs(board, word, i, j, 0)) {
                return true;
            }
        }
    }
    
    return false;
};


function dfs(board, word, i, j, current) {
    if (current === word.length) {
        return true;
    }

    if (i < 0 || j < 0 || i >= board.length || j >= board[i].length) {
        return false;
    }
    
    if (word[current] === board[i][j]) {
        board[i][j] = '*'
        if (dfs(board, word, i + 1, j, current + 1)) return true;
        if (dfs(board, word, i, j + 1, current + 1)) return true;
        if (dfs(board, word, i - 1, j, current + 1)) return true;
        if (dfs(board, word, i, j - 1, current + 1)) return true;
        board[i][j] = word[current];
    }
    
    return false;
}