var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0)
    dummy.next = head
    let prev = dummy
    let cur = head
    let count = 0
    while(cur){
        count++
        if(count % k === 0){
            prev = reverse(prev, cur.next)
            cur = prev.next
        }else{
            cur = cur.next
        }
    }
    return dummy.next
}
var reverse = function(prev, next){
    let last = prev.next
    let cur = last.next
    while(cur !== next){
        last.next = cur.next
        cur.next = prev.next
        prev.next = cur
        cur = last.next
    }
    return last
}