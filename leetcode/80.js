var removeDuplicates = function(nums) {
    const len = nums.length
    if(len <= 2){
        return len
    }
    let left = 2,right = 2
    while(right < len){
        if(nums[left - 2] !== nums[right]){
            nums[left] = nums[right]
            left++
        }
        right++
    }
    return left
};