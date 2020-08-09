class Solution {
public:
    int iteration(int n) {
        int sum = 0;
        while (n) {
            int digit = n % 10;
            sum += digit * digit;
            n /= 10;
        }
        return sum;
    }
    
    bool isHappy(int n) {
        for(int i = 0; i < 100000; i++) {    
            if (n == 1) return true;
            n = iteration(n);
        }
        return false;
    }
};