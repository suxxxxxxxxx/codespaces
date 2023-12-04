var longestSubstring = function(s, k) {
    const helper = (star,end) =>{
        if(end - star + 1 < k){
            return 0
        }
        const nums = {}
        for(let i =star;i <=end;i++){
            if(!nums[s[i]]){
                nums[s[i]] = 1
            }else{
                nums[s[i]]++
            }
        }
        while(end -star + 1 >= k && nums[star] <k){
            star++
        }
        while(end - star + 1 >= k && nums[end] <k){
            end--
        }
        if(end - star + 1 <k){
            return 0
        }
        for(let i = star;i <= end; i++){
            if(nums[s[i]] < k){
                return Math.max(helper(star,i - 1),helper(i + 1,end))
            }
        }
        return end - star +1
    }
    return helper(0,s.length - 1)
};