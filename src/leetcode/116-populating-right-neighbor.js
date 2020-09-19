/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root; 
    
    let queue = [];
    queue.push(root);
    
    while(queue.length) {
        let nodesInLevel = queue.length;
        let prev = null;
        for (let i = 0; i < nodesInLevel; i++) {
            let current = queue.pop();
            
            current.next = prev;
            
            if (current.right) {
                queue.unshift(current.right);
            }
            
            if (current.left) {
                queue.unshift(current.left);
            }
            
            prev = current;
        }
    }
    
    return root;
};