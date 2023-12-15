
// var hasPathSum = function(root, targetSum) {
//   if (!root) return false;
//   if (!root.left && !root.right && targetsum === root.val) return true;
//   return haspathsum(root.left, targetsum - root.val) || haspathsum(root.right, targetsum - root.val);
// };
var hasPathSum = function(root,targetSum){
    if(!root) return false
    if(!root.right&&!root.left&&targetSum ==root.val)return true
    return hasPathSum(root.left,targetSum-root.val)||hasPathSum(root.right,targetSum-root.val)
}