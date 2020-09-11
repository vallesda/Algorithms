/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
    if (A.length != B.length) {
        throw new Error('Invalid input, please insert two palindromes');
    }
    
    let hm = new Map();
    let answer = [];
    for (let i = 0; i < B.length; i++) {
        let current = B[i];
        if (hm.has(current)) {
            hm.get(current).push(i);
        } else {
            hm.set(current, [i]);
        }
    }
    
    for (let i = 0; i < A.length; i++) {
        let current = A[i];
        let arrayOfIndexes = hm.get(current);
        answer.push(arrayOfIndexes[arrayOfIndexes.length - 1]);
        arrayOfIndexes.pop();
    }
    
    return answer;
};