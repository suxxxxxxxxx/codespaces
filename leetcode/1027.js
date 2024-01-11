var longestArithSeqLength = function(nums) {
    const minv = _.min(nums);
    const maxv = _.max(nums);
    const diff = maxv - minv;
    let ans = 1;
    for (let d = -diff; d <= diff; ++d) {
        const f = new Array(maxv + 1).fill(-1);
        for (const num of nums) {
            let prev = num - d;
            if (prev >= minv && prev <= maxv && f[prev] !== -1) {
                f[num] = Math.max(f[num], f[prev] + 1);
                ans = Math.max(ans, f[num]);
            }
            f[num] = Math.max(f[num], 1);
        }
    }
    return ans;
};