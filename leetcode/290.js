var wordPattern = function(pattern, s) {
    let s1 =new Map()
    let s2 =new Map()
    let word = s.split(' ')
    if(pattern.length !== word.length){
        return false
    }
    const len = pattern.length
    for(let i = 0;i < len;i++){
        let char = pattern[i]
        let currentWord = word[i]
        if ((s1.has(char) && s1.get(char) !== currentWord) || 
        (s2.has(currentWord) && s2.get(currentWord) !== char)) {
        return false;
    }
    s1.set(char, currentWord);
    s2.set(currentWord, char);
    }
    return true
};