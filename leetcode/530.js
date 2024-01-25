var getMinimumDifference = function(root) {
    let min = Infinity;
    let pre = -1;
    const dfs = (root) => {
        if (!root) return;
        dfs(root.left);
        if (pre !== -1) {
            min = Math.min(min, root.val - pre);
        }
        pre = root.val;
        dfs(root.right);
    }
    dfs(root);
    return min;
}