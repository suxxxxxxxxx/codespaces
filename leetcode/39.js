var combinationSum = function(candidates, target) {
    const result = [];
    const dfs = (target, index, path) => {
        if (target < 0) return;
        if (target === 0) {
            result.push(path);
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            dfs(target - candidates[i], i, [...path, candidates[i]]);
        }
    };
    dfs(target, 0, []);
    return result;
}