class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {        
        while(stones.size() > 1) {
            sort(stones.begin(), stones.end());
            int x = stones[stones.size() - 1];
            stones.pop_back();
            
            int y = stones[stones.size() - 1];
            stones.pop_back();
            
            int absDiff = abs(x - y);
            if (absDiff) {
                stones.push_back(absDiff);
            }
        }
        
        return stones.size() ? stones[0] : 0;
    }
};