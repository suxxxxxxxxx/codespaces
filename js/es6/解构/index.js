// let [x,y,z,w] = ['a', 'b', 'c' , 'd'  , 'e'];

// let x = 'a'
// let y = 'b'
// let z = 'c'

// let arr =[1,2,3]
// let newArr = [0]
// console.log([...newArr,...arr]);
let {name = '阳阳',age} = {
    name: 'zhangsan',
    age: 18
}
console.log(name,age);