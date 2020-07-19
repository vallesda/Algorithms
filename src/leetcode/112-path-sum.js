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
 * @param {number} sum
 * @return {boolean}
 */

var hasPathSum = function(root, sum) {
    return dfs(root, 0, sum);
};

function dfs(root, current, target) {
    if (!root) {
        return false;
    }
    
    current += root.val;
    
    if (!root.left && !root.right && current == target) {
        return true;
    }

    return dfs(root.left, current, target) || dfs(root.right, current, target);
}