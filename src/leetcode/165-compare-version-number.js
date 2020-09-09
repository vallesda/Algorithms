/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split(".");
    let v2 = version2.split(".");
    let i = 0;
    
    while (i < v1.length || i < v2.length) {
        let c1 = i < v1.length ? parseInt(v1[i]) : 0;
        let c2 = i < v2.length ? parseInt(v2[i]) : 0;
        
        if (c1 > c2) return 1;
        if (c2 > c1) return -1;
        i++;
    }
    
    return 0;
};