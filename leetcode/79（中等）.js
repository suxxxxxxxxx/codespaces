var exist = function (board, word) {
  const m = board.length,
    n = board[0].length;
  const dfs = (i, j, k) => {
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k])
      return false;
    if (k === word.length - 1) return true;
    const tmp = board[i][j];
    board[i][j] = "/";
    const res =
      dfs(i + 1, j, k + 1) ||
      dfs(i - 1, j, k + 1) ||
      dfs(i, j + 1, k + 1) ||
      dfs(i, j - 1, k + 1);
    board[i][j] = tmp;
    return res;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;
};
