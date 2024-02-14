var subsets = function(nums) {
    let res = [];
    let dfs = (index, path) => {
        res.push(path);
        for (let i = index; i < nums.length; i++) {
            dfs(i + 1, path.concat(nums[i]));
        }
    }
    dfs(0, []);
    return res;
}
