var obj = {
    a: 1,
    b: 2,
    c: 3
}
// obj.a = 2
// obj.b = 3
// obj.c = 4
with(obj){
    a = 2,
    b = 3,
    c = 4
}
console.log(obj);