
// var arr = [1,2,3,4,5,6,7]

// var sum = arr.reduce(function(prev,item,index,arr){
//     return pre + item
// },
// 0
// )
// console.log(sum);
var arr = [1,[2,[3,4]]];

function flatten(arr){
    return arr.reduce(function(prev,item){
        return prev.concat(Array.isArray(item)?flatten(item):item)
    },[])
}
console.log(flatten(arr));