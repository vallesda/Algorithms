/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    const dfs = function(current) {
        if (!root) {
            return 0;
        }
        
        let max = 0;
        for (let i = 0; i < current.children.length; i++) {
            max = Math.max(max, dfs(current.children[i]));
        }
        
        return max + 1;
    }
    
    return dfs(root);
};