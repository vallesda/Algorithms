/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let words = str.split(" ");
    let dict = new Map();
    let usedWords = new Set();
    
    if (words.length != pattern.length) return false;
    
    for (let i = 0; i < words.length; i++) {
        let current = pattern[i];
        if (dict.has(current)) {
            if (dict.get(current) != words[i]) return false;
        } else {
            if (usedWords.has(words[i])) return false;
            dict.set(current, words[i]);
            usedWords.add(words[i]);
        }
    }

    return true;
};