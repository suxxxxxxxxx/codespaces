var generate = function(numRows) {
    let n =[]
    for(let i =0; i < numRows;i++){
        let row = new Array(i+1).fill(1)
        for (let j = 1; j < i;j++){
            row[j] = n[i-1][j-1] + n[i-1][j] 
        }
        n.push(row)
    }
    return n
};