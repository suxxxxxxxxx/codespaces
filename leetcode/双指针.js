var maxArea = function(height) {
    let res = 0
    for (let i = 0, j = height.length - 1; i < j; ) {
        res = Math.max(res, Math.min(height[i], height[j]) * (j - i))
        height[i] < height[j] ? i++ : j--
    }
    return res
};
var height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea);