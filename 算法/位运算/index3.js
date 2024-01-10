// const num1 = 5 //101
// const num2 = 3 //011

// const res = num1 ^ num2 //110

// console.log(res) //6

const num1 = 5//101
const num2 = 7//111
// [num1,num2] = [num2,num1]
//用异或运算交换两个数
function swap(num1,num2){
    num1 = num1 ^ num2
    num2 = num1 ^ num2
    num1 = num1 ^ num2
    return [num1,num2]
}