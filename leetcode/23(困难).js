var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  let res = lists[0];
  for (let i = 1; i < lists.length; i++) {
    res = mergeTwoLists(res, lists[i]);
  }
  return res;
};
var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(0);
  let cur = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  if (l1) cur.next = l1;
  if (l2) cur.next = l2;
  return dummy.next;
};
