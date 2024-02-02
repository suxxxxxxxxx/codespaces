var findMedianSortedArrays = function(nums1, nums2) {
    const arr = nums1.concat(nums2).sort((a, b) => a - b);
    const len = arr.length;
    return len % 2 === 0 ? (arr[len / 2 - 1] + arr[len / 2]) / 2 : arr[(len - 1) / 2];
}