var generateParenthesis = function(n) {
    let result = [];
    backtrack(0, 0, n, '', result);
    return result;
    }
    function backtrack(left, right, n, str, result) {
        if (left === n && right === n) {
            result.push(str);
            return;
        }
        if (left < n) {
            backtrack(left + 1, right, n, str + '(', result);
        }
        if (right < left) {
            backtrack(left, right + 1, n, str + ')', result);
        }
    }
    