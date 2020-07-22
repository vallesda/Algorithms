class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        typedef pair<int,int> pi;
        unordered_map<int,int> hashMap;
        priority_queue<pi, vector<pi>, greater<pi>> pq;
        vector<int> answer;
        
        for (int i = 0; i < nums.size(); i++) {
            if (hashMap.find(nums[i]) != hashMap.end()) {
                hashMap[nums[i]]++;
            } else {
                hashMap.emplace(nums[i], 1);
            }
        }
        
        for (auto it = hashMap.begin(); it != hashMap.end(); it++) {
            if (pq.size() == k) {
                if (pq.top().first < it->second) {
                    pq.pop();
                    pq.push(make_pair(it->second, it->first));
                }
            } else {
                pq.push(make_pair(it->second, it->first));
            }
        }
        
        while(pq.size() != 0) {
            answer.push_back(pq.top().second);
            pq.pop();
        }
        
        return answer;
    }
};