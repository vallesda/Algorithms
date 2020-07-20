/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let iS = 0;
    let iT = 0;
    while(iT < t.length) {
        if (s[iS] === t[iT]) {
            iS++;
        }

        iT++;
    }
    
    return iS == s.length;
};