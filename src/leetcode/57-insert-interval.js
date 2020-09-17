var insert = function(intervals, newInterval) {
    let answer = [];  
    intervals.sort((a, b) => a - b);
    
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] < newInterval[0]) {
            answer.push(intervals[i]);
        } else if (newInterval[1] < intervals[i][0]) {
            answer.push(newInterval);
            newInterval = intervals[i].slice();
        } else {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        }
    }
    
    answer.push(newInterval);
    return answer;
};