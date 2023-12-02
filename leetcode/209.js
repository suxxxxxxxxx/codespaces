var minSubArrayLen = function(target, nums) {
    const len = nums.length;
    let left = 0, right = 0, sum = 0, res = Infinity;

    while (right < len) {
        sum += nums[right++];

        while (sum >= target) {
            res = Math.min(res, right - left);
            sum -= nums[left++];
        }
    }

    // 如果 res 没有被更新过，说明没有找到满足条件的子数组
    return res === Infinity ? 0 : res;
};