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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    let ans = {
        smallest: null,
    }
    
    dfsCount(root,  ans, "");
    
    return ans.smallest;
};

const toChar = val => String.fromCharCode(val + 'a'.charCodeAt(0));

function dfsCount(root, ans, letters) {
    if (!root) {
        return;
    }
    
    let num = toChar(root.val);
    letters = num + letters; 
    
    if (!root.left && !root.right) {
        if (!ans.smallest) {
           ans.smallest = letters.slice();
        } else if (ans.smallest.localeCompare(letters) === 1) {
            ans.smallest = letters.slice(); 
        }
    } else {
        dfsCount(root.left, ans, letters);
        dfsCount(root.right, ans, letters);
        letters = letters.substr(1);
    }
    
    return;
}