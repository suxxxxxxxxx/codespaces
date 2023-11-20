var findDisappearedNumbers = function(nums) {
    let len = nums.length;

    // 遍历数组，将对应位置的元素标记为负数
    for (let i = 0; i < len; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    // 遍历数组，找到未被标记的位置，即为缺失的数字
    let result = [];
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }
    
    return result;
};