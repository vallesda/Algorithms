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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    return dfs(root, sum, [], []);
};

function dfs(root, target, solution, ans) {
    if (!root) {
        return ans;
    }
    
    solution.push(root.val);
    
    if (!root.left && !root.right && target === root.val) {
        ans.push(solution.slice());
    }
    
    dfs(root.left, target - root.val, solution, ans);
    dfs(root.right, target - root.val, solution, ans);
    
    solution.pop();
    
    return ans;
}