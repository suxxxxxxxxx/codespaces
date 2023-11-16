var majorityElement = function(nums) {
    let len = nums.length
    let ans = []
    let map = new Map()
    let a =0
    for (num of nums){
        map.has(num)?map.set(num,map.get(num)+1):map.set(num,1)
    } 
    const keysArray = Array.from(map.keys());
    keysArray.forEach(x => {
    if (map.get(x) > Math.floor(nums.length / 3)) {
        ans.push(x);
    }
    });
    return ans
};