var moveZeroes = function(nums) {
    let i = 0; // 指针 i 用于遍历数组
    let j = 0; // 指针 j 用于记录非零元素的位置

    while (i < nums.length) {
        if (nums[i] !== 0) {
            // 如果当前元素不是零，交换元素位置
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }
        i++;
    }
};