let arr = [2,3,1,4,5]

arr.sort((a,b) => {
    return a - b
})

//冒泡排序
function bubbleSort(arr) {
    let len = arr.length
    for(let i = 0; i < len; i++) {
        for(let j = i+1; j < len - i - 1; j++) {
            if(arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}

// function selectSort(arr) {
//     let len = arr.length
//     let res = []
//     while(arr.length) {
//         let min = getMin(arr)
//         res.push(min)
//         arr.splice(arr.indexOf(min), 1)
//     }
//     console.log(res);
//     return res
// }
// function getMin(arr) {
//     let min =Infinity
//     for(let i = 0; i < arr.length; i++) {
//         if(min > arr[i]) {
//             min = arr[i]
//         }
//     }
//     return min
// }