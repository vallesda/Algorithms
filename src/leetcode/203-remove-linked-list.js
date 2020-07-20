/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {    
    let nh = new ListNode(-1, head);
    let current = head;
    let prev = nh;
    
    while (current) {
        if (current.val != val) {
            prev = current;
        } else {
            prev.next = current.next;
        }
        current = current.next;
    }
    
    return nh.next;
};