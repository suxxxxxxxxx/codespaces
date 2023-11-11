// let obj ={
//     a:1,
//     b:2,
// }
// var arr = [1,2,3]
// obj[arr] = 3
// console.log(obj);
let map = new Map([
    ['name','张三'],
])

let obj ={a:1}
map.set(obj, 'hello')

// console.log(map.get(obj));
// map.forEach((val,key,map)=>{
//     console.log(val,key,map);
// })
console.log(map.keys());
