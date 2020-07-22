class Solution {
public:
    typedef pair<int,string> pi;
    
    struct greater1{
        bool operator()(const pi& a,const pi& b) const{
            return a.first == b.first ? a.second > b.second : a.first < b.first;
        }
    };
    
    
    vector<string> topKFrequent(vector<string>& words, int k) {
        unordered_map<string,int> hashMap;
        vector<string> answer;
        
        for (int i = 0; i < words.size(); i++) {
            hashMap[words[i]]++;
        }

        priority_queue<pi, vector<pi>, greater1> pq;
        
        for (auto &it: hashMap) {            
            pq.push(make_pair(it.second, it.first));
        }
        
        while(!pq.empty() && k) {
            answer.push_back(pq.top().second);
            pq.pop();
            k--;
        }

        return answer;
    }
};  