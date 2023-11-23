var singleNumber = function(nums) {
    const map = new Map()
    const ans = []
    for(const item of nums){
        map.has(item)?map.set(item , 2):map.set(item,1)
    }
    for(const [key, value] of map.entries()){
        if(value === 1){
            ans.push(key)
        }
    }
    return ans
};