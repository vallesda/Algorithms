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
#include <unordered_map>

int main(){
    int length = 0;
    pair<string, int> ans = make_pair("", 0);
    string s;
    map<string, int> seen;

    cin >> length >> s;

    for (int i = 1; i < length; i++) {
        string temp = s.substr(i - 1, 2);
        seen[temp]++;

        if (ans.second < seen[temp]) {
            ans.second = seen[temp];
            ans.first = temp;
        }
    }

    cout << ans.first;

    return 0;
}