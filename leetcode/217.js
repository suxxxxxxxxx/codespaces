var containsDuplicate = function(nums) {
    let a = new Map()
    if(nums.length === 0||nums.length ===1){
        return false
    }
    const n = nums.length
    for (let i =0; i < n;i++){
        if(!a.has(nums[i])){
            a.set(nums[i])
        }else{
            return true
        }
    }
    return false
};