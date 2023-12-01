var reverseStr = function(s, k) {
    let len = s.length
    const arr = Array.from(s)
    for(let i = 0;i <len;i += 2*k){
        reverse(arr,i,Math.min(i+k,len) - 1)
    }
    return arr.join('')
};

const reverse = (arr,left,right) => {
    while(left < right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++
        right--
    }
    return arr
}