class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var reverseBetween = function(head, m, n) {
    if (m === n) return head;
    const dummy = new ListNode();
    dummy.next = head;
    let lNode = dummy;
    let rNode = dummy;
    for (let i = 0; i < m - 1; i++) {
        lNode = lNode.next;
    }// lNode指向要反转的前驱节点
    for (let i = 0; i < n; i++) {
        rNode = rNode.next;
    }// rNode指向要反转的后驱节点
    let r = rNode.next;
    rNode.next = null;
    let l = lNode.next;
    const res = reverseList(lNode.next);
    lNode.next = res;
    l.next = r;
    return dummy.next;
}

var reverseList = function(head) {
    let pre = null;
    let cur = head;
    while (cur) {
        const nextNode = cur.next; // 保存当前节点的下一个节点
        cur.next = pre; // 当前节点指向前驱节点
        pre = cur; // 前驱节点指向当前节点
        cur = nextNode; // 当前节点指向下一个节点
    }
    return pre;
}
 