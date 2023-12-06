// var reverseList = function(head) {
//     let cur = head;
//     const dummy = new ListNode();
//     let nextNode = null;
//     while (cur) {
//         nextNode = cur.next;
//         cur.next = dummy.next;
//         dummy.next = cur;
//         cur = nextNode;
//     }
//     return dummy.next;
// }
// var reverseList = function(head) {
//     let pre = null;
//     let cur = head;
//     while(cur) {
//         const nextNode = cur.next;//保存当前节点的下一个节点
//         cur.next = pre;//当前节点指向前驱节点
//         pre = cur;//前驱节点指向当前节点
//         cur = nextNode;//当前节点指向下一个节点
//     }
//     return pre;
// }
