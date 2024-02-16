var generateTrees = function (n) {
  if (n === 0) return [];
  return generate(1, n);
};
var generate = function (start, end) {
  let res = [];
  if (start > end) {
    res.push(null);
    return res;
  }
  for (let i = start; i <= end; i++) {
    let left = generate(start, i - 1);
    let right = generate(i + 1, end);
    for (let l of left) {
      for (let r of right) {
        let cur = new TreeNode(i);
        cur.left = l;
        cur.right = r;
        res.push(cur);
      }
    }
  }
  return res;
};
