var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next; // 保存下一个节点
    curr.next = prev; // 当前节点指向前一个节点
    prev = curr; // 前一个节点后移
    curr = next; // 当前节点后移
  }
  return prev;
};
