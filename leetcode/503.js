var nextGreaterElements = function(nums) {
    let stack = [];
    let res = new Array(nums.length).fill(-1);
    for (let i = 0; i < nums.length * 2; i++) {
        while (stack.length && nums[i % nums.length] > nums[stack[stack.length - 1]]) {
        res[stack.pop()] = nums[i % nums.length];
        }
        stack.push(i % nums.length);
    }
    return res;
    }