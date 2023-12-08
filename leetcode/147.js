//链表的插入排序
var insertionSortList = function (head) {
    if (!head) {
        return null;
    }
    const dummyHead = new ListNode(0, head);
    let cur = head.next;
    let lastSorted = head;
    while (cur) {
        if (lastSorted.val <= cur.val) {
            lastSorted = lastSorted.next;
        } else {
            let prev = dummyHead;
            while (prev.next.val <= cur.val) {
                prev = prev.next;
            }
            lastSorted.next = cur.next;
            cur.next = prev.next;
            prev.next = cur;
        }
        cur = lastSorted.next;
    }
    return dummyHead.next;
};