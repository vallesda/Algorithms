class PhoneDirectory {
public:
    /** Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory. 
    */
    set<int> numbers;
    priority_queue<int, vector<int>, greater<int>> pq;
    PhoneDirectory(int maxNumbers) {
        numbers.clear();
        for (int i = 0; i < maxNumbers; i++) {
            pq.push(i);
        }
    }
    
    /** Provide a number which is not assigned to anyone.
        @return - Return an available number. Return -1 if none is available. */
    int get() {
        if (pq.empty()) {
            return -1;
        }
        int number = pq.top();
        pq.pop();
        numbers.insert(number);
        return number;
    }
    
    /** Check if a number is available or not. */
    bool check(int number) {
        if (numbers.find(number) != numbers.end()) {
            return false;
        }
        return true;
    }
    
    /** Recycle or release a number. */
    void release(int number) {
        if (numbers.find(number) != numbers.end()) {
            numbers.erase(number);
            pq.push(number);   
        }
    }
};

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * PhoneDirectory* obj = new PhoneDirectory(maxNumbers);
 * int param_1 = obj->get();
 * bool param_2 = obj->check(number);
 * obj->release(number);
 */