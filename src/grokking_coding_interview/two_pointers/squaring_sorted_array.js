const make_squares = function(arr) {
    squares = []
    let smallest = 0, biggest = arr.length - 1;
    while (smallest <= biggest) {
      if (Math.abs(arr[smallest]) >= Math.abs(arr[biggest])) {
        squares.unshift(arr[smallest] * arr[smallest]);
        smallest++;
      } else {
        squares.unshift(arr[biggest] * arr[biggest]);
        biggest--;
      }
    }
    return squares;
  };
  