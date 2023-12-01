let arr = [2,3,1,4,5]
function selectSort(arr) {
    let len = arr.length
    let minIndex
    for(let i = 0; i < len - 1; i++) {
        minIndex = i
        for(let j = i; j < len; j++) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }

        if(minIndex !== i) {
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
        }
    }
}