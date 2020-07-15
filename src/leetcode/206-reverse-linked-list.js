
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) {
    return null;
}

let currentNode = head;
let previousHead = null;

while (currentNode) {
    let nextHead = currentNode.next;
    currentNode.next = previousHead;
    previousHead = currentNode;
    currentNode = nextHead;
}

return previousHead;
};