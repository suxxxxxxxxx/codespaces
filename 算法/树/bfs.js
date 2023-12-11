function BFS(root){
    const queue = []
    queue.push(root)
    while(queue.length){
        const n = queue[0]
        console.log(n.val)
        if(n.left) queue.push(n.left)
        if(n.right) queue.push(n.right) 
        queue.shift()
    }
    
} 