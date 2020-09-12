var lengthOfLongestSubstring = function(s) {
    let ws = 0,
      seen = new Set(),
      max_num = 0;
  
    for (let i = 0; i < s.length; i++) {
      while(seen.has(s[i])) {
        seen.delete(s[ws]);
        ws++;
      }
  
      seen.add(s[i]);
      max_num = Math.max(seen.size, max_num);
    }
  
    return max_num;
  };