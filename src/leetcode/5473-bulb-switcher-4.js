/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
    let distinct = 0;
    let prev = "0";
    for (let i = 0; i < target.length; i++) {
        if (prev != target[i]) {
            distinct++;
            prev = target[i];
        }
    }
    return distinct;
};