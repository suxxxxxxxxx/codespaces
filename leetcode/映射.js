var isIsomorphic = function(s, t) {
    let s1 ={}
    let s2 ={}
    const len = s.length
    for(let i =0;i <= len;i++){
        let x = s[i],y = t[i]
        if((s1[x]&&s1[x] !== y)||(s2[y]&&s2[y] !== x)){
            return false
        }
        s1[x] = y
        s2[y] = x
    }  
    return true
};