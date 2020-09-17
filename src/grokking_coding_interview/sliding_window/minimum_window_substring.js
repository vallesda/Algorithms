/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let minString = "";
    let frequency = generateFrequency(t);
    
    let start = 0, matched = 0;
    
    for (let end = 0; end < s.length; end++) {
        let current = s[end];
        
        if (current in frequency) {
            frequency[current] -= 1;
            if (frequency[current] === 0) matched++;
        }
        
        
        while (matched === Object.keys(frequency).length) {
            let newLength = end - start + 1;
            minString =  newLength < minString.length 
                || minString.length === 0 
                ? s.substr(start, newLength) : minString;
            
            let toBeErased = s[start];
            start++;
            if (toBeErased in frequency) {
                frequency[toBeErased] += 1;
                if (frequency[toBeErased] > 0) matched--;
            }
            
        }
    }
    
    return minString;
};

function generateFrequency(str) {
    let frequency = {};
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (!(letter in frequency)) {
            frequency[letter] = 0;
        }
        
        frequency[letter] += 1;
    }
    return frequency;
}
