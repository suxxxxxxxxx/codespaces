let obj ={
    name :'苏苏',
    age: 20,
    like:{
        type:'eat'
    }
}
function deepClone(obj){
    let objCopy = {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(obj[key] instanceof Object){
                objCopy[key] = deepClone(obj[key])
            }else{
                objCopy[key] = obj[key]
            }
        }
    }
    return objCopy
}
obj.like.type = 'sleep'
console.log(deepClone(obj));