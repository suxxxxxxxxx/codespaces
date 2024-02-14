var divide = function (dividend, divisor) {
  let result = 0;
  let sign = 1;
  if (dividend < 0) {
    sign = -sign;
    dividend = -dividend;
  }
  if (divisor < 0) {
    sign = -sign;
    divisor = -divisor;
  }
  while (dividend >= divisor) {
    let temp = divisor;
    let multiple = 1;
    while (dividend >= temp << 1) {
      temp <<= 1;
      multiple <<= 1;
    }
    dividend -= temp;
    result += multiple;
  }
  result = sign > 0 ? result : -result;
  return result > 2147483647
    ? 2147483647
    : result < -2147483648
    ? -2147483648
    : result;
};
