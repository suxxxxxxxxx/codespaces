var levelOrderBottom = function(root) {
    if (!root) return [];
    let queue = [root];
    let res = [];
    while (queue.length) {
        let size = queue.length;
        let temp = [];
        while (size--) {
            let node = queue.shift();
            temp.push(node.val);
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        res.unshift(temp);
    }
    return res;
};