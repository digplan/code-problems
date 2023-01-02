const solveSudoku = (board, row = 0, col = 0) => {
    function check(board, row, col, val) {
        row = row - row % 3, col = col - col % 3
        for (let x = 0; x < 9; x++) if (board[x][col] == val) return false;
        for (let y = 0; y < 9; y++) if (board[row][y] == val) return false;
        for (let x = 0; x < 3; x++)
            for (let y = 0; y < 3; y++)
                if (board[row + x][col + y] == val) return false
        return true
    }

    if (row == 9) return true;
    if (col == 9) return solveSudoku(board, row + 1, 0);
    if (board[row][col] != '.') return solveSudoku(board, row, col + 1);

    for (let c = 1; c <= 9; c++) {
        if (check(board, row, col, c)) {
            board[row][col] = c;
            if (solveSudoku(board, row, col + 1)) return true;
            board[row][col] = '.';
        }
    }
    return false;
}

console.log(JSON.stringify(solveSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
])))

/*
[["5","3","4","6","7","8","9","1","2"],
["6","7","2","1","9","5","3","4","8"],
["1","9","8","3","4","2","5","6","7"],
["8","5","9","7","6","1","4","2","3"],
["4","2","6","8","5","3","7","9","1"],
["7","1","3","9","2","4","8","5","6"],
["9","6","1","5","3","7","2","8","4"],
["2","8","7","4","1","9","6","3","5"],
["3","4","5","2","8","6","1","7","9"]]
*/