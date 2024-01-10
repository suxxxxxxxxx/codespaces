// const num1 = 5 //101
// const num2 = 6 //110
// const res = num1 & num2 //100
// console.log(res) //4

const num = 15
//判断是不是2的幂次方

function test(n){
    if(n <= 0) return false
    return (n & (n-1)) === 0
}