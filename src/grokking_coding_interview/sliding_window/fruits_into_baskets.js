const fruits_into_baskets = function(fruits) {
    let window_start = 0,
      dict = new Map(),
      max_num = 0,
      num_baskets = 2;
  
    for (let window_end = 0; window_end < fruits.length; window_end++) {
      if (!dict.has(fruits[window_end])) {
        dict.set(fruits[window_end], 0);
      }
  
      dict.set(fruits[window_end], dict.get(fruits[window_end]) + 1);
  
      while (dict.size > num_baskets) {
        dict.set(fruits[window_start], dict.get(fruits[window_start]) - 1);
  
        if (dict.get(fruits[window_start]) === 0) {
          dict.delete(fruits[window_start]);
        }
  
        window_start++;
      }
  
      max_num = Math.max(max_num, window_end + 1 - window_start);
    }
    return max_num;
  };
  