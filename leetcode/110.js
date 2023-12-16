var isBalanced = function (root) {
    function getHeight(node) {
        if (node === null) return 0;

        const leftH = getHeight(node.left);
        const rightH = getHeight(node.right);

        // 如果左右子树任一不是平衡的，或者左右子树高度差大于1，返回-1表示不平衡
        if (leftH === -1 || rightH === -1 || Math.abs(leftH - rightH) > 1) return -1;

        // 返回当前节点的高度，为左右子树中较大的高度加1
        return Math.max(leftH, rightH) + 1;
    }

    return getHeight(root) !== -1;
};