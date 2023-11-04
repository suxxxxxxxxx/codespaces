function mul(num){//可以计算阶层
    if (n ==1){
        return 1;
    }
    return n*mul(n-1);
}
mul(5)
console.log(mul(5));