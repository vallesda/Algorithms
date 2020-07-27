/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let secretCount = new Map();
    let bulls = 0;
    let cows = 0;
    
    for (let i = 0; i < secret.length; i++) {
        let char = secret[i];
        if (secretCount.has(char)) {
            secretCount.set(char, secretCount.get(char) + 1);
        } else {
            secretCount.set(char, 1);
        }
    }
    
    for (let i = 0; i < guess.length; i++) {
        let x = guess[i];
        if (secret[i] === x) {
            bulls++;
        }
        console.log(secretCount);
        if (secretCount.has(x) && 0 < secretCount.get(x)) {
            cows++;
            secretCount.set(x, secretCount.get(x) - 1);
        }
    }
    
    return `${bulls}A${cows - bulls}B`;
};