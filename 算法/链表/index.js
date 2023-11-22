let arr = [1,2,3,4,5,6]//有序列表线性结构

let res ={
    val:1,//数据域
    next:{//指针域
        val:2,
        next:{}
    }
}
function ListNode(val){
    this.val = val
    this.next = null
}
const node1 = new ListNode(1)
node.next = new ListNode(2)
const node3 = new ListNode(3)
node3.next = node1.next
node1.next = node3
console.log(node1)
node1.next = node3.next