/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hm = createMap(s);
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        if (hm.get(current) === 1) {
            return i;
        }
    }
    return - 1;
};

function createMap(s) {
    let hashMap = new Map();
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (hashMap.has(c)) {
            let n = hashMap.get(c) + 1;
            hashMap.set(c, n);
        } else {
            hashMap.set(c, 1);
        }
    }
    return hashMap;
} 