var jump = function(nums) {
    let end = nums.length - 1;
    let steps = 0;
    while (end > 0) {
        for (let i = 0; i < end; i++) {
            if (i + nums[i] >= end) {
                end = i;
                steps++;
                break;
            }
        }
    }
    return steps;
}