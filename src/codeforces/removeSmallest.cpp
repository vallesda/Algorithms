using namespace std;
#include <algorithm>
#include <iostream>
#include <iterator>
#include <numeric>
#include <sstream>
#include <fstream>
#include <cassert>
#include <climits>
#include <cstdlib>
#include <cstring>
#include <string>
#include <cstdio>
#include <vector>
#include <cmath>
#include <queue>
#include <deque>
#include <stack>
#include <list>
#include <map>
#include <set>
 
#define foreach(x, v) for (typeof (v).begin() x=(v).begin(); x !=(v).end(); ++x)
#define For(i, a, b) for (int i=(a); i<(b); ++i)
#define D(x) cout << #x " is " << x << endl
 
int main(){
    int tests = 0;
    int nums = 0;
    int n = 0;
    vector<int> arr;
    vector< vector<int> > problem;
    string possible = "YES";
 
    cin >> tests;
 
    for (int i = 0; i < tests; i++) {
        cin >> nums;
        for (int j = 0; j < nums; j++) {
            cin >> n;
            arr.push_back(n);
        }
 
        sort(arr.begin(), arr.end());
        problem.push_back(arr);
        arr.clear();
    }
 
    for (int i = 0; i < problem.size(); i++) {
        possible = "YES";
        for (int j = 1; j < problem[i].size(); j++) {
            int absD = abs(problem[i][j - 1] - problem[i][j]);
            if (absD > 1) {
                possible = "NO";
                break;
            }
        }
        cout << possible << endl;
    }
 
    return 0;
}