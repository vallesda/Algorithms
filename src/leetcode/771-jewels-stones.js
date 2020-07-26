/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let m = new Map();
    let jewels = 0;
    
    for (let i = 0; i < S.length; i++) {
        let stone = S[i];
        
        if (m.has(stone)) {
            m.set(stone, m.get(stone) + 1);
        } else {
            m.set(stone, 1);
        }
    }
    
    for (let i = 0; i < J.length; i++) {
        if (m.has(J[i])) {
            jewels += m.get(J[i]);
        }
    }
    
    return jewels;
};