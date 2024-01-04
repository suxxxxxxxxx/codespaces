var tribonacci = function(n) {
    if(n === 0){
        return 0
    }
    if(n <= 2){
        return 1
    }
    let a = 0,b= 0,c = 1,d = 1
    for(let i =3;i <= n;i++){
        a = b
        b = c
        c = d
        d = a + b+ c
    }
    return d
};