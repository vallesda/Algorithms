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
    void helper(TreeNode* current, vector<int>&S) {
        if (!current) {
            return;
        }
        helper(current->left, S);
        S.push_back(current->val);
        helper(current->right, S);
    }
    
    vector<int> getAllElements(TreeNode* root1, TreeNode* root2) {
        vector<int> S1, S2;
        helper(root1, S1);
        helper(root2, S2);
        vector<int> sArray;
        
        int ptr1 = 0, ptr2 = 0;
        while(ptr1 < S1.size() || ptr2 < S2.size()) {
            if (ptr1 >= S1.size()) {
                sArray.push_back(S2[ptr2]);
                ptr2++;
            } else if (ptr2 >= S2.size()) {
                sArray.push_back(S1[ptr1]);
                ptr1++;
            } else if (S2[ptr2] > S1[ptr1]) {
                sArray.push_back(S1[ptr1]);
                ptr1++;
            } else {
                sArray.push_back(S2[ptr2]);
                ptr2++;
            }
        }
        
        return sArray;
    }
};