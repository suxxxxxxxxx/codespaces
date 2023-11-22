var singleNonDuplicate = function(nums) {
    let len =nums.length
    let left = 0,right = len - 1
    while(left <right){
        const mid = Math.floor((right - left) / 2) + left;
        if(nums[mid] ===nums[mid ^ 1]){
            left = mid + 1
        }else{
            right = mid
        }
    }
    return nums[left]
};