var findTheDifference = function(s, t) {
    const len = s.length;

    if (len === 0) {
        return t;
    }

    let map = new Map();

    for (let i = 0; i < len; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    for (let j = 0; j < t.length; j++) {
        if (!map.has(t[j]) || map.get(t[j]) === 0) {
            return t[j];
        } else {
            map.set(t[j], map.get(t[j]) - 1);
        }
    }
    return "";
};