/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
    let answer = "";
    const  vowels = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    }
    
    return [...S].filter(char => {
        if (vowels[char]) {
            return '';
        } else {
            return char;
        }
    }).join('');
};