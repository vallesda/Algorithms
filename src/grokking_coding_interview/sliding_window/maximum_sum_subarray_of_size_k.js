const max_sub_array_of_size_k = function(k, arr) {
    let max_sum = 0;
    let windowS = 0;
    let current = 0;
    for (let i = 0; i < arr.length; i++) {
      current += arr[i];
      if (i >= k) {
        current -= arr[windowS];
        windowS++;
      }
  
      max_sum = Math.max(current, max_sum);
    }
    return max_sum;
  };