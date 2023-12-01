let arr = [2,3,1,4,5]
function quickSort(arr) {
    if(arr.length <= 1) {
        return arr
    }
    let left = []
    let right = []
    let base  = arr.splice(0,1)[0]
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < base) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), base, ...quickSort(right)]
}