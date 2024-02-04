var minWindow = function(s, t) {
    let left = 0, right = 0;
    let minLen = Infinity;
    let res = '';
    let map = new Map();
    for (let c of t) {
        map.set(c, map.has(c) ? map.get(c) + 1 : 1);
    }
    let count = map.size;
    while (right < s.length) {
        let c = s[right];
        if (map.has(c)) {
            map.set(c, map.get(c) - 1);
            if (map.get(c) === 0) count--;
        }
        right++;
        while (count === 0) {
            if (right - left < minLen) {
                minLen = right - left;
                res = s.slice(left, right);
            }
            let c = s[left];
            if (map.has(c)) {
                map.set(c, map.get(c) + 1);
                if (map.get(c) === 1) count++;
            }
            left++;
        }
    }
    return res;
}