var isSymmetric = function(root) {
    if (!root) return true;
    return isMirror(root.left, root.right);
};
var isMirror = function(p, q) {
    if (p === null && q === null) return true;
    if (p === null && q !== null) return false;
    if (p !== null && q === null) return false;
    if (p.val !== q.val) return false;
    return isMirror(p.left, q.right) && isMirror(p.right, q.left)
};