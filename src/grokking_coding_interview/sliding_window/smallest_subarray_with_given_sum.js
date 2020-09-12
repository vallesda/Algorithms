const smallest_subarray_with_given_sum = function(s, arr) {
    let min_num = Infinity,
      window_sum = 0,
      window_start = 0;
  
    for (let window_end = 0; window_end < arr.length; window_end++) {
      window_sum += arr[window_end];
  
      while (window_sum >= s && window_start <= window_end) {
        min_num = Math.min(window_end + 1 - window_start, min_num);
        window_sum -= arr[window_start];
        window_start++;
      }
  
    }
    return min_num !== Infinity ? min_num : -1;
  };
  