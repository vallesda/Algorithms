const search_triplets = function(arr) {
    arr.sort((a, b) => a - b);
    triplets = [];
    for (let i = 0; i < arr.length; i++) {
      if (i > 0 && arr[i - 1] == arr[i]) {
        continue;
      }
      search_pair(arr, i, triplets);
    }
    return triplets;
  };
  
  function search_pair(arr, i, triplets) {
      let current = arr[i];
      let start = i + 1, end = arr.length - 1;
      while (start < end) {
        let sum = current + arr[start] + arr[end];
        if (sum === 0) {
          console.log([current, arr[start], arr[end]]);
          triplets.push([current, arr[start], arr[end]]);
          start++;
          end--;
          while (start < end && arr[start] === arr[start - 1]) {
            start += 1; // skip same element to avoid duplicate triplets
          }
          while (start < end && arr[end] === arr[end + 1]) {
            end -= 1; // skip same element to avoid duplicate triplets
          }
        } else if (sum > 0) {
          end--;
        } else {
          start++;
        }
      }
  }
  