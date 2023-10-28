var isValid = function(s) {
    let stack = []
    let map ={
        '(':')',
        '[':']',
        '{':'}',
    }
    for (let i = 0;i<s.length;i++){
        let item = s[i]
        if (item in map){
            stack.push( item)
        }else{
            if(!stack.length||item !== map[stack.pop()]){
                return false
            }
        }
    }
    return !stack.length
}