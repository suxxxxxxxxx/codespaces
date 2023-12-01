
var isSubsequence = function(s, t) {
    let sIndex = 0;
    
    for (let char of t) {
        if (char === s[sIndex]) {
            sIndex++;
        }
        
        if (sIndex === s.length) {
            // 字符串 s 的所有字符都找到了，是 t 的子序列
            return true;
        }
    }

    // 遍历完整个字符串 t 后，仍然没有找到所有的字符 s
    return sIndex === s.length;
};
