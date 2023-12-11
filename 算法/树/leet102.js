var levelOrder = function(root) {
    const queue = []
    const result = []
    if(root) queue.push(root)
    while(queue.length){
        const level = []
        const size = queue.length
        for(let i = 0; i < size; i++){
            const n = queue.shift()
            level.push(n.val)
            if(n.left) queue.push(n.left)
            if(n.right) queue.push(n.right)
        }
        result.push(level)
    }
    return result
}