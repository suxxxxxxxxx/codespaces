let obj = {
    name:'张三'
}
// console.log(obj['张三'])
// obj.girlfriend = '李四'

let girl = 'girlfriend'
obj[girl] = '小红'
delete obj.girlfriend
console.log(obj);