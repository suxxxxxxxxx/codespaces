var averageOfLevels = function(root) {
    let res = [];
    let queue = [root];
    while(queue.length) {
        let sum = 0;
        let len = queue.length;
        for(let i = 0; i < len; i++) {
            let node = queue.shift();
            sum += node.val;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(sum / len);
    }
    return res;
}