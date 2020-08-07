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

typedef long long ll;

#define foreach(x, v) for (typeof (v).begin() x=(v).begin(); x !=(v).end(); ++x)
#define For(i, a, b) for (int i=(a); i<(b); ++i)
#define D(x) cout << #x " is " << x << endl

int main(){
    ll tests = 0;
    ll gifts = 0;
    ll t = LONG_MAX;
    ll minCandy = LONG_MAX;
    ll minOranges = LONG_MAX;
    //vector<ll> candy;
    //vector<ll> orange;
    ll candy[1000005];
    ll orange[1000005];
    ll count = 0;

    cin >> tests;

    for (ll i = 0; i < tests; i++) {
        cin >> gifts;
        count = 0;
        minCandy = LONG_MAX;
        minOranges = LONG_MAX;

        for (ll j = 0; j < gifts; j++) {
            cin >> t;
            minCandy = min(minCandy, t);
            candy[j] = t;
        }

        for (ll j = 0; j < gifts; j++) {
            cin >> t;
            minOranges = min(minOranges, t);
            orange[j] = t;
        }

        for (ll j = 0; j < gifts; j++) {
            long toGoOrange = orange[j] - minOranges;
            long toGoCandy = candy[j] - minCandy;

            count += abs(toGoOrange - toGoCandy) + min(toGoOrange, toGoCandy);
        }
        cout << count << endl;
    }

    return 0;
}