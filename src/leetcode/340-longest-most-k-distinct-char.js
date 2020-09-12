/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let window_start = 0,
    dict = new Map(),
    max_num = 0;

    for (let i = 0; i < s.length; i++) {
        if (!dict.has(s[i])) {
            dict.set(s[i], 0);
        }
        
        dict.set(s[i], dict.get(s[i]) + 1);
        
        while (dict.size > k) {
          dict.set(s[window_start], dict.get(s[window_start]) - 1);
            
          if (dict.get(s[window_start]) === 0) {
              dict.delete(s[window_start]);
          }
          window_start++;
        }

        max_num = Math.max(max_num, i + 1 - window_start);
    }
  
    return max_num;
};