var sortColors = function(nums) {
    let p = -1, q = nums.length;
    for(let i = 0; i < q; i++){
        if(nums[i] == 0){
            [nums[i],nums[p+1]] = [nums[p+1],nums[i]];
            p += 1;
        }
        else if(nums[i] == 2){
            [nums[i],nums[q-1]] = [nums[q-1],nums[i]];
            q -= 1;
            i--
        }
    }
    return nums;
};