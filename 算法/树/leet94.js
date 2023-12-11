//中序遍历
var inorderTraversal = function(root) {
    if(!root) return []
    let ans = []
    ans = ans.concat(inorderTraversal(root.left))
    ans.push(root.val)
    ans = ans.concat(inorderTraversal(root.right))
    return ans
};
//中序遍历迭代
var inorderTraversal = function(root) {
    if(!root) return []
    const res = []
    const stack = []
    let p = root
    while(stack.length || p) {
        while(p) {
            stack.push(p)
            p = p.left
        }
        const n = stack.pop()
        res.push(n.val)
        p = n.right
    }
    return res
}