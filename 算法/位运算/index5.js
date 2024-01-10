const num = 5 
const lNum = num << 2

console.log(lNum) //20

const rNum = num >> 1

console.log(rNum) //2

//乘法
function multi(num1,num2){
    let res = 0
    while(num2 > 0){
        if(num2 & 1){
            res += num1
        }
        num1 <<= 1
        num2 >>= 1
    }
    return res
}
//除法
function divide(num1,num2){
    let res = 0
    while(num1 >= num2){
        let count = 0
        while(num1 >= (num2 << count)){
            count++
        }
        res += 1 << (count - 1)
        num1 -= num2 << (count - 1)
    }
    return res
}