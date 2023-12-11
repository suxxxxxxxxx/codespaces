//后序遍历二叉树递归
var postorderTraversal = function(root) {
    if(!root) return []
    let ans = []
    ans = ans.concat(postorderTraversal(root.left))
    ans = ans.concat(postorderTraversal(root.right))
    ans.push(root.val)
    return ans
};