/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];
    
    let subarrays = function(position, curr) {
        if (curr.length > n) return;

        if (curr.length == k) {
            result.push(curr.slice());
        }

        for (let i = position; i <= n; i++) {
            curr.push(i);
            subarrays(i + 1, curr);
            curr.pop();
        }
    };
    
    subarrays(1, []);
    return result;    
};