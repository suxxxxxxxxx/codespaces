// 原始数据类型

let a ='hello'
let b = 123
let c = true
let d = null
let e = undefined

// 引用类型
// let f = {name:'张三'}
// let g = [1,2,3]
// let h = function() {
//     console.log('我是函数')
// }

// let a = 1
// let b = a
// a = 2
// console.log(b) // 1

let obj = {
    name:'张三'
}
let lw = obj
obj.name = '李四'
console.log(lw.name) // 李四