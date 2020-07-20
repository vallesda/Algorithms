/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    let hm = new Map();
    let currentPos = 0;
    let movements = 0;
    
    for (let i = 0; i < keyboard.length; i++) {
        hm.set(keyboard[i], i);
    }
    
    for (let j = 0; j < word.length; j++) {
        let c = word[j];
        let newPos = hm.get(c);
        
        movements += Math.abs(currentPos - newPos);
        currentPos = newPos;
    }
    
    return movements;
};