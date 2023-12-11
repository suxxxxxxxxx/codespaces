// var preorderTraversal = function(root) {
//     if(!root) return []
//     let ans = []
//     ans.push(root.val)
//     ans = ans.concat(preorderTraversal(root.left))
//     ans = ans.concat(preorderTraversal(root.right))
//     return ans
// };

var preorderTraversal = function(root) {
    if(!root) return []
    const res = []
    const stack = []
    stack.push(root )
    while(stack.length) {
        const n = stack.pop()
        res.push(n.val)
        if(n.right) stack.push(n.right)
        if(n.left) stack.push(n.left)
    }
    return res
}