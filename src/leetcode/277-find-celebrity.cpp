/* The knows API is defined for you.
      bool knows(int a, int b); */

class Solution {
public:
    int isCelebrity(int c, int n) {
        for (int j = 0; j < n; j++) {
            if (j == c) continue;
            if (knows(c, j) || !knows(j, c)) {
                return -1;
            }
        }
        return c;
    }
    
    int findCelebrity(int n) {
        int candidate = 0;
        for (int i = 0; i < n; i++) {
            if (knows(candidate, i)) {
                candidate = i;
            }
        }
        
        return isCelebrity(candidate, n);
    }
};