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
var sumNumbers = function(root) {
    let ans = {
        sum: 0,
    }
    
    dfs(root, ans, 0);
    
    return ans.sum;
};

function dfs(root, ans, sum) {
    if (!root) {
        return;
    }
    
    if (sum) {
        sum = (sum * 10) + root.val;
    } else {
        sum = root.val;
    }
    
    if (!root.left && !root.right) {
        ans.sum += sum;
    }
    
    dfs(root.left, ans, sum);
    dfs(root.right, ans, sum);
    
    return;
}