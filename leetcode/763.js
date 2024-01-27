var partitionLabels = function(s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], i);
    }
    let res = [];
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, map.get(s[i]));
        if (i === end) {
            res.push(end - start + 1);
            start = end + 1;
        }
    }
    return res;
}