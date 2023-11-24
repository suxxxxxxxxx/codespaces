let obj ={
    name :'苏苏',
    age: 20,
    like:{
        type:'eat'
    },
    a: undefined,
    b:null,
    c:function(){},
    e:Symbol('e'),
    f:123n,
    d:{
        n:100
    } 
}
obj.c = obj.d
obj.d.m = obj.c

let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj);