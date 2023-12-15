var binaryTreePaths = function (root) {
    const paths = []
    const construct_paths = (root, path) => {
        if (root) {
            path += root.val.toString()
            if (root.left === null && root.right === null) {
                paths.push(path)
            } else {
                path += "->"
                construct_paths(root.left, path)
                construct_paths(root.right, path)
            }
        }
    }
    construct_paths(root, "")
    return paths
};
