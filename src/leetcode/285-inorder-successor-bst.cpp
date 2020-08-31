/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    
    TreeNode* findSuccessor(TreeNode* current, TreeNode* target, TreeNode* candidate) {
        if (!current) {
            return candidate;
        }
        
        if  (current->val <= target->val) {
            return findSuccessor(current->right, target, candidate);
        } else {
            return findSuccessor(current->left, target, current);
        }
    }
    
    TreeNode* inorderSuccessor(TreeNode* root, TreeNode* p) {
        return findSuccessor(root, p, NULL);
    }
};