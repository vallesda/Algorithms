/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aPos = a.length - 1;
    let bPos = b.length - 1;
    let carry = 0;
    
    let answer = [];
    
    while(aPos >= 0 || bPos >= 0 || carry) {
        let sum = carry;
        
        if (aPos >= 0) {
            sum += parseInt(a[aPos]);
            aPos--;
        }
        
        if (bPos >= 0) {
            sum += parseInt(b[bPos]);
            bPos--;
        }
       
        if (sum === 0) {
            answer.unshift('0');
            carry = 0;
        } else if (sum === 1) {
            answer.unshift('1');
            carry = 0;
        } else if (sum === 2) {
            answer.unshift('0');
            carry = 1;
        } else if (sum === 3) {
            answer.unshift('1');
            carry = 1;
        }
    }
    
    return answer.join('');
};