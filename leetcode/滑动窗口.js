var lengthOfLongestSubstring = function(s) {
    if (s.length === 0 || s.length === 1) {
        return s.length;
    }
    let a = new Set();
    let n = s.length;
    let ans = 0;
    let i = 0;
    let j = 0;

    while (i < n && j < n) {
        if (!a.has(s.charAt(j))) {
            a.add(s.charAt(j++));
            ans = Math.max(ans, j - i);
        } else {
            a.delete(s.charAt(i++));
        }
    }

    return ans;
};