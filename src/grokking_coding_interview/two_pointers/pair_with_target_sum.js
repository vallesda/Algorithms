const pair_with_targetsum = function(arr, target_sum) {
    let start = 0, end = arr.length - 1;
    while (start < end) {
      let sum = arr[start] + arr[end];
      if (sum == target_sum) {
        return [start, end];
      } else if (sum > target_sum) {
        end--;
      } else {
        start++;
      }
    }
    return [-1, -1];
  }
  