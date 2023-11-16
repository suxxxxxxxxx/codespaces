
var missingNumber = function(nums) {
    let len = nums.length
    nums.sort((a ,b) => a - b)
     for(let i = 0; i<len;i++){
         if(nums[i] - i !== 0)
         return i
     }
 return len
};