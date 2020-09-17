const triplet_sum_close_to_target = function(arr, target_sum) {
    let closest = Infinity;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      let left = i + 1, right = arr.length - 1;
      while (left < right) {
        let sum = arr[left] + arr[right] + current;
        if (sum === target_sum) {
          return target_sum;
        } else if (sum > target_sum) {
          right--;
        } else {
          left++;
        }
        closest = (Math.abs(target_sum - closest) > Math.abs(target_sum - sum)) ? sum : closest;
      }
    }
    return closest;
  };