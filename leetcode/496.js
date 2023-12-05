var nextGreaterElement = function(nums1, nums2) {
    let ans = []
    const map = new Map()
    for(let i = nums2.length - 1;i >= 0;i--){
        let num = nums2[i]
        while(ans.length&&num >= ans[ans.length - 1]){
            ans.pop()
        }
        map.set(num, ans.length ? ans[ans.length - 1] : -1);
        ans.push(num)
    }
    const res = new Array(nums1.length).fill(0).map(function( _, i) {
        return map.get(nums1[i]);
    })
    return res
}