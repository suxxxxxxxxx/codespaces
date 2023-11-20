var findDuplicates = function(nums) {
    let arr = []
    const len = nums.length
    let map = new Map()
    for (let i = 0; i < len; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    map.forEach((value, key) => {
        if (value === 2) {
            arr.push(key);
        }
    })
    return arr
};