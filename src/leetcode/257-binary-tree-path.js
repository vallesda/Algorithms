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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    return dfs(root, [], []);
};

function dfs(root, path, ans) {
    if (!root) {
        return ans;
    }
    
    path.push(root.val);
    
    if (!root.left && !root.right && root.val) {
        ans.push(path.join('->'));
    }
    
    dfs(root.left, path, ans);
    dfs(root.right, path, ans);
    path.pop();
    
    
    return ans;
} 