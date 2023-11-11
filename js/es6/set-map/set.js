// let arr =[1,1,2,3,3]
// let obj ={
//     a:1,
//     b:2,
//     c:3
// }
// let set = new Set([1,2,3,4])
// console.log( set.keys());
// console.log( set.values());
// set.add(5)
// console.log(set)
//数组去重
// let arr =[1,1,2,3,3]
// function unique(arr){
//     return [...new Set(arr)]
// }

// var unique = (arr) => [...new Set(arr)];

// console.log(unique(arr));


// let set = new Set([1,2,3,4,4,3,2,1])
// set.delete(1)

// set.clear()

// console.log( set);

// set.forEach((item,index,set)=>{
//     console.log(item,index,set);
// })

// console.log(set.has(1));

// console.log(set)
// console.log(set.keys());
// for (let item of set.entries()){
//     console.log(item);
// }

let str = 'abcdeff'
for (let item of str){
    console.log(item);
}