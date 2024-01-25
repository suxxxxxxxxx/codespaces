var isPalindrome = function(s) {
    var str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    var len = str.length;
    if (len < 2) return true;
    var mid = Math.floor(len / 2);
    for (var i = 0; i < mid; i++) {
        if (str[i] !== str[len - i - 1]) return false;
    }
    return true;
}