let arr = [1,3,-1,-3,5,3,6,7];
let k = 3;
// var maxSlidingWindow = function(nums, k) {
//     let left = 0,right = k-1;
//     let res = [];
//     while(right < nums.length){
//         let max = calMax(left,right);
//         res.push(max);
//         left++;
//         right++;
//     }
//     return res;
//     function calMax(left,right){
//         let max = nums[left];
//         for(let i = left;i <= right;i++){
//             max = Math.max(max,nums[i]);
//         }
//         return max;
//     }
//     return res;
// }
// console.log(maxSlidingWindow(arr,k));

//双端队列
function maxSlidingWindow(nums,k){
    //在窗口移动的过程中，只根据变化的元素对最大值更新
    const len = arr.length;
    const res = [];
    const deque = [];
    for(let i = 0;i < len;i++){
        while(deque.length && nums[deque[deque.length-1]] <= nums[i]){
            deque.pop();
        }
        deque.push(i);
        //判断队首元素是否在窗口内
        if(deque[0] <= i - k){
            deque.shift();
        }
        if(i >= k){
            res.push(nums[deque[0]]);
        }
    }
    return res;
}
console.log(maxSlidingWindow(arr,k));