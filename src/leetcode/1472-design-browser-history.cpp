class BrowserHistory {
public:
    vector<string> urls;
    int index = 0;
    
    BrowserHistory(string homepage) {
        urls.push_back(homepage);
        index = 0;
    }
    
    void visit(string url) {
        urls.erase(urls.begin() + index + 1, urls.end());
        urls.push_back(url);
        index = urls.size() - 1;
    }
    
    string back(int steps) {
        if (index - steps >= 0) {
            index -= steps;
        } else {
            index = 0; 
        }
        return urls[index];
    }
    
    string forward(int steps) {
        if (index + steps < urls.size()) {
            index += steps;
        } else {
            index = urls.size() - 1;
        }
        
        return urls[index];
    }
};


/**
 * Your BrowserHistory object will be instantiated and called as such:
 * BrowserHistory* obj = new BrowserHistory(homepage);
 * obj->visit(url);
 * string param_2 = obj->back(steps);
 * string param_3 = obj->forward(steps);
 */