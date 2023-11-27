var maxSubArray = function(nums) {
    let p = 0,ans = nums[0]
    for(let i =0;i < nums.length;i++){
        let x = nums[i]
        p = Math.max(p+x,x)
        ans = Math.max(ans,p)
    }
    return ans
};