var deleteNode = function(root, key) {
    if (!root) return null;
    if (root.val === key) {
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        let min = findMin(root.right);
        root.val = min.val;
        root.right = deleteNode(root.right, min.val);
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else {
        root.right = deleteNode(root.right, key);
    }
    return root;
}
var findMin = function(root) {
    while (root.left) {
        root = root.left;
    }
    return root;
}