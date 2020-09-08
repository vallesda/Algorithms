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
function sum(root, binary, ans) {
    if (!root) {
        return;
    }
    
    binary += root.val;
    
    if (!root.left && !root.right) {
        ans.count += parseInt(binary, 2);
        return;
    }
    
    sum(root.left, binary, ans);
    sum(root.right, binary, ans);
} 

var sumRootToLeaf = function(root) {
    let binary = "";
    let ans = { count : 0 };
    sum(root, binary, ans);
    return ans.count;
};