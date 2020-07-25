/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    let levelStack = [{
        depth: 1,
        value: root,
    }];
    
    let maxD = 0;
     while(levelStack.length) {
        let { depth, value } = levelStack.pop();
         if (value) {
             maxD = Math.max(maxD, depth);
             
             // HERE For for N tree.
             levelStack.push({
                 depth: depth + 1,
                 value: value.left
             });
             
             levelStack.push({
                 depth: depth + 1,
                 value: value.right
             });
             
         }
     }
    
    return maxD;
};