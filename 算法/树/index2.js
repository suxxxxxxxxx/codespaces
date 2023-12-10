let tree = {
    val: 'A',
    left: {
        val: 'B',
        left: {
            val: 'D',
            left: null,
            right: null
        },
        right:{
            val: 'E',
            left: null,
            right: null
        }
    },
}
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right
}

function preorder(root){
    if(!root) return
    preorder(root.left)
    preorder(root.right)
    console.log(root.val)
}