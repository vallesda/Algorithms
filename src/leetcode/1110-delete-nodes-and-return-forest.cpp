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
    TreeNode* deleteHelper(TreeNode* current, set<int>& toDelete, vector<TreeNode*> &toStart) {
        if (!current) {
            return NULL;
        }
        
        if (current->left) {
            current->left = deleteHelper(current->left, toDelete, toStart);
        }
        
        if (current->right) {
            current->right = deleteHelper(current->right, toDelete, toStart);
        }
        
        
        
        if (toDelete.count(current->val) != 0) {
            if (current->left) {
                toStart.push_back(current->left);
            }
            
            if (current->right) {
                toStart.push_back(current->right);
            }
            
            return NULL;
        }
        
        return current;
    }
    
    
    vector<TreeNode*> delNodes(TreeNode* root, vector<int>& to_delete) {
        vector<TreeNode*> toStart;
        set<int> toDelete;
        
        for (int i : to_delete) {
            toDelete.insert(i);
        }
        
        deleteHelper(root, toDelete, toStart);
        
        if (toDelete.count(root->val) == 0) {
            toStart.push_back(root);
        }

        
        return toStart;
    }
};