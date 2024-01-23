
var copyRandomList = function(head) {
    if (head === null) return null;
    let map = new Map();
    let node = head;
    while (node !== null) {
        map.set(node, new Node(node.val));
        node = node.next;
    }
    node = head;
    while (node !== null) {
        map.get(node).next = map.get(node.next) || null;
        map.get(node).random = map.get(node.random) || null;
        node = node.next;
    }
    return map.get(head);
}