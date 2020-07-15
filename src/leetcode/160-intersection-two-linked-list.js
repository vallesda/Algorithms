/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null;
    }
    
    let numA = getNumOfNodes(headA);
    let numB = getNumOfNodes(headB);
    let moveDiff = Math.abs(numA - numB);
    
    if (numA > numB) {
        headA = moveNumOfNodes(headA, moveDiff);
    } else {
        headB = moveNumOfNodes(headB, moveDiff);
    }
    
    return lookForIntersection(headA, headB);
};

function getNumOfNodes(head) {
    if (!head) {
        return 0;
    }
    
    let numOfNodes = 0;
    
    while (head) {
        numOfNodes++;
        head = head.next;
    }
    
    return numOfNodes;
}


function moveNumOfNodes(head, n) {
    if (!head) {
        return null;
    }
    
    while(head && n) {
        head = head.next;
        n--;
    }
    
    return head;
}

function lookForIntersection(headA, headB) {
    while(headA && headB) {
        if (headA == headB) {
            return headA;
        }
        
        headA = headA.next;
        headB = headB.next;
    }
        
    return null;
}