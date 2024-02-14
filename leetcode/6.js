var convert = function (s, numRows) {
  if (numRows === 1) return s;
  let rows = new Array(numRows).fill("");
  let n = 2 * numRows - 2;
  for (let i = 0; i < s.length; i++) {
    let x = i % n;
    rows[Math.min(x, n - x)] += s[i];
  }
  return rows.join("");
};
