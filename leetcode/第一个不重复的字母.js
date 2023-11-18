var firstUniqChar = function(s) {
    let map = new Map();
    const len = s.length;
    
    // 遍历字符串，统计每个字符出现的次数
    for (let i = 0; i < len; i++) {
        map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
    }

    // 再次遍历字符串，找到第一个出现次数为 1 的字符的索引
    for (let a = 0; a < len; a++) {
        if (map.get(s[a]) === 1) {
            return a;
        }
    }

    // 如果没有不重复的字符，则返回 -1
    return -1;
};