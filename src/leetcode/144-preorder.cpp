/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root) {
        if (!root) return {};
        stack<TreeNode*> S;
        vector<int> traversal;
        
        S.push(root);
        
        while(!S.empty()) {
            TreeNode* current = S.top();
            S.pop();
            
            traversal.push_back(current->val);
            
            if (current->right) {
                S.push(current->right);
            }
            
            if (current->left) {
                S.push(current->left);
            }
        } 
        
        return traversal;           
    }
};