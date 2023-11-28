
var uniquePaths = function(m, n) {
    let ans = new Array(m).fill(1)
    for(let i =0;i < m;i++){
        ans[i] = new Array(n).fill(1)
    }
    for(let j = 1;j < m;j++){
        for(let k =1;k < n;k++){
            ans[j][k] = ans[j-1][k] + ans[j][k-1]
        }
    }
    return ans[m-1][n-1]
};