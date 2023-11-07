var threeSum = function(nums) {
    const n = nums.length
    let ans = [],left =0 ,right = 0 ,sum = 0    
    if(n < 3||nums === null){
        return []
    }
    nums.sort((a,b) => a - b)
    for (let i = 0; i < n;i++){
        if(nums[i] > 0){
            break
        }
        if(i > 0&&nums[i] === nums[i-1]){
            continue
        }
        left = i + 1
        right = n - 1 
        while(left <right){
            sum =nums[i] + nums[left] + nums[right]
            if(sum ===0){
                ans.push([nums[i],nums[left],nums[right]])
                while(left < right&&nums[left] === nums[left+1])left++
                while(left < right&&nums[right] === nums[right-1])right--
                left++
                right--
            }else if(sum < 0)left++
            else if(sum > 0)right--
        }
    }
    return ans
};