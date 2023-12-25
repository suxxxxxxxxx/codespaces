var productExceptSelf = function(nums) {
    const n = nums.length
    const left = new Array(n)
    const right = new Array(n)
    left[0] = 1
    right[n-1] = 1
    for(let i = 1;i < n;i++){
        left[i] = left[i-1] * nums[i-1]
        right[n-1-i] = right[n-i] * nums[n-i] // Fix: Use correct index n-i instead of i-i
    }
    const res = new Array(n)
    for(let i = 0;i < n;i++){
        res[i] = left[i] * right[i]
    }
    return res
};