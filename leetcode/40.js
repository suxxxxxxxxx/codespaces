var combinationSum2 = function(candidates, target) {
    const result = [];
    const dfs = (target, index, path) => {
        if (target < 0) return;
        if (target === 0) {
            result.push(path);
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            if (i > index && candidates[i] === candidates[i - 1]) continue;
            dfs(target - candidates[i], i + 1, [...path, candidates[i]]);
        }
    };
    candidates.sort((a, b) => a - b);
    dfs(target, 0, []);
    return result;
}