// let a = {name: '苏苏'}
// let b = Object.create(a)
// a.name = '小苏'
// console.log(b.name);
// let a = {
//     name: '苏苏',
//     like:{
//         n : '吃饭'        
//     }
// }
// let b = Object.assign({}, a)
// a.like.n= '睡觉'
// console.log(b);
let arr = [1,2,3,{a:10}]
// let newArr = [].concat(arr)
// let newArr = arr.slice(0)
// let newArr = [...arr]
let newArr = arr.toReeversed().reverse()
arr[3].a = 100
console.log(newArr);