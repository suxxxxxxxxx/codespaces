var simplifyPath = function(path) {
    let stack = [];
    let paths = path.split('/');
    for (let p of paths) {
        if (p === '' || p === '.') {
            continue;
        } else if (p === '..') {
            stack.pop();
        } else {
            stack.push(p);
        }
    }
    return '/' + stack.join('/');
}