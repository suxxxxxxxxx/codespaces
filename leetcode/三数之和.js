var threeSumClosest = function(nums, target) {
    nums.sort((a,b) =>a -b)
    const n = nums.length
    let ans = 0
    let midff = Number.MAX_SAFE_INTEGER
    for(let i =0;i < n;i++){
        let j = i + 1,k = n-1
        while(j < k){
            let s = nums[i] + nums[j] + nums[k]
            if(s === target){
                return target
            }
            if(s > target){
                if(s - target <midff){
                    midff = s -target
                    ans = s
                }
                k--
            }else{
                if(target - s < midff){
                    midff = target - s
                    ans = s
                }
                j++
            }
        }
    }
    return ans
}