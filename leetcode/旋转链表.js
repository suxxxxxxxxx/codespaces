var rotateRight = function(head, k) {
    if (k == 0||!head||!head.next){
        return head
    }
    let count = 1
    let a = head 
    while(a.next){
        a = a.next
        count++
    }
    let add = (count-k % count) % count
    a.next = head
    while(add){
        a = a.next
        add--
    }
    let b = a.next
    a.next = null
    return b

};