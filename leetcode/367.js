var isPerfectSquare = function(num) {
    let left = 0,right = num
    while(left <= right){
        let mid = Math.floor((left + right)/2)
        let ans = mid * mid
        if(ans > num){
            right = mid - 1
        }else if(ans < num){
            left = mid +1
        }else{
            return true
        }
    }
    return false
};