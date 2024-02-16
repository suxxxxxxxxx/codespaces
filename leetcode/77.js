var combine = function (n, k) {
  let res = [];
  let path = [];
  dfs(1, n, k, path, res);
  return res;
};
var dfs = function (start, n, k, path, res) {
  if (path.length === k) {
    res.push([...path]);
    return;
  }
  for (let i = start; i <= n; i++) {
    path.push(i);
    dfs(i + 1, n, k, path, res);
    path.pop();
  }
};
