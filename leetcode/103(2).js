var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    let level = 0;
    while (queue.length) {
        let len = queue.length;
        let temp = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (level % 2 === 0) {
                temp.push(node.val);
            } else {
                temp.unshift(node.val);
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(temp);
        level++;
    }
    return res;
}