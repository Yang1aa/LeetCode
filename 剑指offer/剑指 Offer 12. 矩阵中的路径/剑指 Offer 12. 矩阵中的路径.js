/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function (board, word) {
    function dfs(i, j, index) {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word.charAt(index))
            return false;
        if (board[i][j] === word.charAt(index) && index === word.length - 1) {
            return true
        }
        let temp = board[i][j];
        board[i][j] = ''
        let res = dfs(i, j + 1, index + 1) ||
            dfs(i + 1, j, index + 1) ||
            dfs(i - 1, j, index + 1) ||
            dfs(i, j - 1, index + 1)
        board[i][j] = temp;
        return res
    }
    const m = board.length
    const n = board[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0))
                return true;
        }
    }
    return false;
};