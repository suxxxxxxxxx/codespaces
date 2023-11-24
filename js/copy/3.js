//浅拷贝的实现原理
let obj ={
    name :'苏苏',
    age: 20,
    like:{
        type:'eat'
    }
}
let arr = ['a',{n:1},]
function shallowClone(target){
    // if(obj instanceof Array){
    //     cloneTarget = []
    // }

    if(typeof target !== 'object' || target == null){
        return target
    }
    let cloneTarget = Array.isArray(target)?[]:{}
    for(let key in target){
        if(obj.hasOwnProperty(key)){
            cloneTarget[key] = obj[key]
        }
    }
    return cloneTarget
}

let newObj = shallowClone(obj)
pbj.like.type = 'sleep'
console.log(newObj.age);