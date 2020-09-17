const find_permutation = function(str, pattern) {
    let matched = 0;
    let patternFrequency = {};
    for (let i = 0; i < pattern.length; i++) {
      const letter = pattern[i];
      if (!(letter in patternFrequency)) {
        patternFrequency[letter] = 0;
      }
      patternFrequency[letter] += 1;
    }
  
    console.log(patternFrequency);
  
    let windowS = 0;
    for (let windowE = 0; windowE < str.length; windowE++) {
      const current = str[windowE];
    
      if (windowE - windowS + 1 > pattern.length) {
        let leftLetter = str[windowS];
        if (leftLetter in patternFrequency) {
          if (patternFrequency[leftLetter] == 0) matched--;
          patternFrequency[leftLetter] += 1;
        }   
        windowS++;
      }
  
      if (current in patternFrequency) {
        patternFrequency[current] -= 1;
        if (patternFrequency[current] === 0) matched++;
      }
  
      if (matched === Object.keys(patternFrequency).length) {
        return true;
      }
    }
  
    return false;
  };
  