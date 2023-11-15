var groupAnagrams = function(strs) {
    let map = new Object()
    for(let s of strs){
        let count = new Array(26).fill(0)
        for(let c of s){
            count[c.charCodeAt()-'a'.charCodeAt()]++
        }
        map[count]?map[count].push(s):map[count] = [s]
    }
    return Object.values(map)
};