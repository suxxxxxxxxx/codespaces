var addBinary = function(a, b) {
    let res = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    while(i >= 0 || j >= 0 || carry === 1) {
        carry += i >= 0 ? parseInt(a[i--]) : 0;
        carry += j >= 0 ? parseInt(b[j--]) : 0;
        res = carry % 2 + res;
        carry = Math.floor(carry / 2);
    }
    return res;
}