var restoreIpAddresses = function(s) {
    let result = [];
    let dfs = (s, sub, n) => {
        if (n === 4) {
            if (s.length === 0) result.push(sub.substring(0, sub.length - 1));
            return;
        }
        for (let k = 1; k < 4; k++) {
            if (s.length < k) break;
            let val = s.substring(0, k) | 0;
            if (val > 255 || k != val.toString().length) continue;
            dfs(s.substring(k), sub + s.substring(0, k) + ".", n + 1);
        }
    };
    dfs(s, "", 0);
    return result;
}