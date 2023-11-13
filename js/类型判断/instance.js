let str ='Hello World'//string
let num = 123//number
let bool = true //boolean
let n = null//null
let u = undefined//undefined
let big = 123n//bigint
let sym = Symbol('sym')//symbol

let obj = {}
let arr = [] 
let func = function(){}
let date = new Date()

// console.log(obj.instanceof Object);//true
// console.log(arr.instanceof Array);//true
// console.log(func.instanceof Function);//true
// console.log(date.instanceof ,Date);//true
// console.log(arr instanceof Object);
function test(obj){
    if(obj instanceof object){
        return obj.name
    }
}