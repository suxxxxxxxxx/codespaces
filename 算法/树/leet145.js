//后序遍历二叉树递归
// var postorderTraversal = function(root) {
//     if(!root) return []
//     let ans = []
//     ans = ans.concat(postorderTraversal(root.left))
//     ans = ans.concat(postorderTraversal(root.right))
//     ans.push(root.val)
//     return ans
// };
//后序遍历二叉树迭代
var postorderTraversal = function(root) {
    if(!root)return []
    const res = []
    const stack = []
    stack.push(root)
    while(stack.length) {
        const n = stack.pop()
        res.unshift(n.val)
        if(n.left) stack.push(n.left)
        if(n.right) stack.push(n.right)
    }
    return res
}