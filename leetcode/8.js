var myAtoi = function (s) {
  let num = parseInt(s);
  if (isNaN(num)) {
    return 0;
  }
  if (num > 2147483647) {
    return 2147483647;
  }
  if (num < -2147483648) {
    return -2147483648;
  }
  return num;
};
