/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || !strs.length) {
        return "";
    }
    
    let candidate = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let word = strs[i];
        let current = 0;
        let flag = true;
        while(current < word.length && flag) {
            if (word[current] !== candidate[current]) {
                if(current === 0) {
                    return "";
                } else {
                    candidate = word.substr(0, current);
                    flag = false;
                }
            }
            current++;
        }
        
        if (flag) {
            candidate = word.substr(0, current);
        }
    }
    return candidate;
};