let arr =['a','b','c']
for(let item of arr){
    console.log(item);
}
let obj ={
    name :'苏苏',
    age: 20,
    like:{
        type:'eat'
    }
}

let data = Object.keys(obj)
data.sex = '男'
for(let key in data){
    if(data.hasOwnProperty(key)){
        console.log(data[key]);
    }
}