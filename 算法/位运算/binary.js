let a = 13
//13 / 2 = 6 ... 1
//6 / 2 = 3 ... 0
//3 / 2 = 1 ... 1
//1 / 2 = 0 ... 1

//1101

let b = 1101
// console.log(parseInt(1101,2 ))
const arr = [1,2,3]
const newArr = arr.map((item,i) => parseInt(item,i))
//parsenInt(1,0) => 1
//parsenInt(2,1) => 2
//parsenInt(3,2) => 3
console.log(newArr)//[1,NaN,NaN]