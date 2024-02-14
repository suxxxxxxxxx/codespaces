let result = [];
var solveNQueens = function(n) {
    result = [];
    let board = [];
    for (let i = 0; i < n; i++) {
      board[i] = [];
      for (let j = 0; j < n; j++) {
        board[i][j] = '.'
      }
    }
    backtrack(0, board, n);
    return result;
};
function deepClone(board) {
  let res = [];
  for (let i = 0; i < board.length; i++) {
    res.push(board[i].join(''));
  }
  return res;
}
function backtrack(row, board, n) {
    if (row === n) {
      result.push(deepClone(board));
      return;
    }
    for (let j = 0; j < n; j++) {
        if (checkInValid(board, row, j, n)) continue;
        board[row][j] = 'Q';
        backtrack(row + 1, board, n);
        board[row][j] = '.';
      }
}
function checkInValid(board, row, column, n) {
  // 行
  for (let i = 0; i < n; i++) {
    if (board[i][column] === 'Q') return true;
  }
  for (let i = row - 1, j = column + 1; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === 'Q') return true;
  }
  for (let i = row - 1, j = column - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') return true;
  }
  return false;
}
