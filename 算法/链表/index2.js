let res ={
    val:1,//数据域
    next:{//指针域
        val:2,
        next:{}
    }
}

//读取值
//数组O(1)
//链表O(n)
const index = 10
let node = new ListNode()
for(let i = 0;i<index;i++){
    node = node.next
}
