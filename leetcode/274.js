var hIndex = function(citations) {
    citations.sort((a,b) =>a - b)
    let i = citations.length - 1,h = 0
    while(i >= 0 && citations[i] > h){
        h++
        i--
    }
    return h
};