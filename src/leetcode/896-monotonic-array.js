/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) { 
    let increasing = true;
    let decreasing = true;
    for (let i = 0; i < A.length - 1; i++) {      
        if (A[i] > A[i + 1]) {
            increasing = false;
        }
        
        if (A[i] < A[i + 1]) {
            decreasing = false;
        }
    }
    
    return increasing || decreasing;
};