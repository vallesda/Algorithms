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
    vector<int> inorderTraversal(TreeNode* root) {
        if (!root) return {};
        stack<TreeNode*> S;
        vector<int> traversal;
        
        S.push(root);
        
        while(!S.empty()) {
            TreeNode* current = S.top();
            S.pop();
            
            while(current->left) {
                TreeNode* temp = current->left;
                current->left = NULL;
                S.push(current);
                current = temp;
            }
            
            traversal.push_back(current->val);
            
            if (current->right) {
                S.push(current->right);
            }
            
        } 
        
        return traversal;        
    }
};