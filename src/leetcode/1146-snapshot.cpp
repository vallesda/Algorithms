class SnapshotArray {
public:
    unordered_map<int, unordered_map<int, int>> snapshot;
    unordered_map<int, int> current;
    int snapId = 0;
    
    SnapshotArray(int length) {
    }
    
    void set(int index, int val) {
        current[index] = val;
    }
    
    int snap() {
        snapshot[snapId] = current;
        snapId++;
        return snapId - 1;
    }
    
    int get(int index, int snap_id) {
        return snapshot[snap_id][index];
    }
};