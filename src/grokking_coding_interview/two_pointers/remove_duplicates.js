const remove_duplicates = function(arr) {
    let anchor = 0, next = 0;
    while (next < arr.length) {
      arr[anchor] = arr[next];
      while(next < arr.length && arr[anchor] == arr[next]) {
        next++;
      }
      anchor++;
    }
    return anchor;
  };