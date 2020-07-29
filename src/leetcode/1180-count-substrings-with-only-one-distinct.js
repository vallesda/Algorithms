/**
 * @param {string} S
 * @return {number}
 */
var countLetters = function(S) {
    let answer = 0;
    let anchor = 0;
    let len = S.length;
    let s = S.split('');
    
    for (let i = 0; i < len; i++) {
        if (s[anchor] != s[i]) {
            answer += getSum(i - anchor);
            anchor = i;
        }
    }
    
    answer += getSum(len - anchor);
    
    return answer;    
};

function getSum(n) {
    let sumRange = (n*(n+1)/2);
    return sumRange;
}