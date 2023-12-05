// var removeNthFromEnd = function(head, n) {
//     var dummy = new ListNode();//创建一个虚拟节点
//     dummy.next = head;//虚拟节点指向头节点
//     const cur = dummy;//当前节点指向虚拟节点
//     let len = 0;//链表长度
//     while(cur.next) {//遍历链表,直到当前节点指向尾节点
//         cur = cur.next;
//         len++;//链表长度加1
//     }
//     let pre = dummy//前驱节点指向虚拟节点
//     for(let i = 0; i < len - n; i++) {//遍历链表,直到前驱节点指向要删除节点的前驱节点
//         pre = pre.next;
//     }
//     if(pre.next) {//如果前驱节点的下一个节点存在
//         pre.next = pre.next.next;//删除前驱节点的下一个节点
//     }
//     return dummy.next;//返回头节点
// }

var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode();//创建一个虚拟节点
    dummy.next = head;//虚拟节点指向头节点
    let fast = dummy;//快指针指向虚拟节点
    let slow = dummy;//慢指针指向虚拟节点
    while(n--) {//快指针先走n步
        fast = fast.next;
    }
    while(fast.next) {//快指针和慢指针同时走,直到快指针指向尾节点
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;//删除慢指针的下一个节点
    return dummy.next;//返回头节点
}
