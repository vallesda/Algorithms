class Solution {
public:
    vector<int> sortedSquares(vector<int>& A) {
        int start = 0, end = A.size() - 1;
        vector<int> squared;
        while (start <= end) {
            if (abs(A[start]) > abs(A[end])) {
                squared.push_back(A[start] * A[start]);
                start++;
            } else {
                squared.push_back(A[end] * A[end]);
                end--;
            }
        }
        reverse(squared.begin(), squared.end());
        return squared;
    }
};