var findPeakElement = function(nums) {
    const len = nums.length
    let left = 0, right = len - 1, ans = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if ((mid === 0 || nums[mid] > nums[mid - 1]) && (mid === len - 1 || nums[mid] > nums[mid + 1])) {
            ans = mid;
            break;
        }

        if (mid !== len - 1 && nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
};