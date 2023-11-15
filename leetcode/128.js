var longestConsecutive = function(nums) {
    if(nums.length == 0){
        return 0
    }
    let len = 1
    let result = 1
    let arr = nums.sort((a,b) => a - b)
    arr.reduce((prev,current) => {
        if(current - prev === 1){
            len++
        }else if(current !== prev){
            result = result<len?len:result
            len = 1
        }
        return current
    })
    result = result<len?len:result
    return result
};