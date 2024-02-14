var reverse = function (x) {
  const reversed = parseInt(x.toString().split("").reverse().join(""));
  if (reversed > 2 ** 31 - 1 || reversed < -(2 ** 31)) return 0;
  return x < 0 ? -reversed : reversed;
};
