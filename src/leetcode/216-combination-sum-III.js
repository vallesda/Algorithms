/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let answer = [];
    
    let backtrack = function(sum, current, next) {
        if (current.length > k || sum > n) {
            return;
        }
        
        if (sum == n && k == current.length) {
            let c = current.slice();
            answer.push(c);
            return;
        }
        
        for (let i = next; i < 9; i++) {
            current.push(i + 1);
            backtrack(sum + i + 1, current, i + 1);
            current.pop();
        }
    };
    backtrack(0, [], 0);
    return answer;
};