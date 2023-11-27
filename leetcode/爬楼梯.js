var climbStairs = function(n) {
    let q = 0,p =0,r =1
    for(let i = 1;i <=n;i++){
        q = p
        p = r
        r = q + p
    }
    return r
};