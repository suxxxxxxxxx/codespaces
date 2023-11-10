var containsNearbyDuplicate = function(nums, k) {
    let a = new Map();
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (a.has(nums[i]) && i - a.get(nums[i]) <= k) {
            return true;
        }
        a.set(nums[i], i);
    }
    return false;
};