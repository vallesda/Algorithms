/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * class BinaryMatrix {
 *   public:
 *     int get(int row, int col);
 *     vector<int> dimensions();
 * };
 */

class Solution {
public:
    int leftMostColumnWithOne(BinaryMatrix &binaryMatrix) {
        vector<int> vec = binaryMatrix.dimensions();
        int H = vec[0], W = vec[1];
        
        int answer = -1;
        int candidate = W - 1;
        
        for (int i = 0; i < H; i++) {
            while(candidate >= 0 && binaryMatrix.get(i, candidate)) {
                answer = candidate;
                candidate--;
            }
        }
        
        return answer;
    }
};