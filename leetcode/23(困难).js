var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    let res = lists[0];
    for (let i = 1; i < lists.length; i++) {
        res = mergeTwoLists(res, lists[i]);
    }
    return res;
}