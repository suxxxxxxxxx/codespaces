var minDepth = function(root) {
    if (!root) return 0;
    if (root.left === null && root.right === null) return 1;
    if (root.left === null && root.right !== null) return minDepth(root.right) + 1;
    if (root.left !== null && root.right === null) return minDepth(root.left) + 1;
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
var minDepth = function(root) {
    if (!root) return 0;
    let queue = [root];
    let depth = 0;
    while (queue.length) {
        let size = queue.length;
        depth++;
        while (size--) {
            let node = queue.shift();
            if (node.left === null && node.right === null) return depth;
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
    }
    return depth;
}