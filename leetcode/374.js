
var guessNumber = function(n) {
    let l = 0, r = n
    while(l <= r){
        mid = Math.floor((l+r)/2)
        if(guess(mid) == -1){
            r = mid -1
        }else if(guess(mid) == 1){
            l = mid +1
        }else{
            return mid
        }
    }
};