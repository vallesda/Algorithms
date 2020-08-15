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
    TreeNode* findRoot(TreeNode* root, int x) {
        if (!root) return NULL;
        
        if (root->val == x) {
            return root;
        }
        
        TreeNode* searchLeft = findRoot(root->left, x);
        if (searchLeft) return searchLeft;
        
        TreeNode* searchRight = findRoot(root->right, x);
        if (searchRight) return searchRight;
        
        return NULL;
    }
    
    int findMax(TreeNode* root, int x) {
        if (!root) return 0;
        
        if (root->val == x) return 0;
        
        return findMax(root->left, x) + findMax(root->right, x) + 1;
    }
    
    bool btreeGameWinningMove(TreeNode* root, int n, int x) {
        TreeNode* posX = findRoot(root, x);
        
        // win by selecting a subtree bigger than x or win by selecting a subtree inside x;
        
        int depthFromRoot = findMax(root, x);
        int depthL = findMax(posX->left, x);
        int depthR = findMax(posX->right, x);
        
        if (depthFromRoot > depthL + depthR + 1) return true;
        if (depthL > depthR + 1 + depthFromRoot) return true;
        if (depthR > depthL + 1 + depthFromRoot) return true;
        
        return false;
    }
};