var recoverTree = function (root) {
  let pre = null;
  let first = null;
  let second = null;
  const inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    if (pre && pre.val > node.val) {
      if (!first) {
        first = pre;
      }
      second = node;
    }
    pre = node;
    inorder(node.right);
  };
  inorder(root);
  [first.val, second.val] = [second.val, first.val];
  return root;
};
