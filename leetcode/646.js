var findLongestChain = function(pairs) {
    pairs.sort((a, b) => a[1] - b[1]);
    let res = 0;
    let cur = -Infinity;
    for (const pair of pairs) {
        if (cur < pair[0]) {
            cur = pair[1];
            res++;
        }
    }
    return res;
}