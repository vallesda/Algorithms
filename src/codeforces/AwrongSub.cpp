#include<iostream>
using namespace std;
int main() {
    int n = 0;
    int k = 0;
    int last = 0;
    
    cin >> n >> k;

    while (k > 0) {
        last = n % 10;

        if (last != 0) {
            n--;
        } else {
            n /= 10;
        }

        k--;
    }

    cout<<n;
    return 0;
}