var findDuplicate = function(nums) {
    const n = nums.length; // 获取数组的长度
    let l = 1, r = n - 1, ans = -1; // 初始化左边界、右边界和答案

    // 开始二分查找
    while (l <= r) {
        let mid = (l + r) >> 1; // 计算中间值

        let cnt = 0; // 初始化计数器，用于统计小于等于中间值的元素个数
        for (let i = 0; i < n; ++i) {
            cnt += nums[i] <= mid; // 遍历数组，统计小于等于中间值的元素个数
        }

        // 根据统计结果调整边界
        if (cnt <= mid) {
            l = mid + 1; // 如果小于等于中间值的元素个数不超过中间值，说明重复元素在右半部分
        } else {
            r = mid - 1; // 如果小于等于中间值的元素个数超过中间值，说明重复元素在左半部分
            ans = mid; // 更新答案
        }
    }

    return ans; // 返回找到的重复元素
};