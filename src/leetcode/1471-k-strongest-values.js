/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
let median = 0;
var getStrongest = function(arr, k) {
    arr.sort(compare);
    
    let n = arr.length;
    let m = parseInt(((n - 1) / 2))
    median = arr[m];
    arr.sort(compareByStrongest);
    
    return arr.slice(n - k);
};

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
}


function compareByStrongest(a,b) {
  if (Math.abs(a - median) < Math.abs(b - median)) {
    return -1;
  }
    
  if (Math.abs(a - median) > Math.abs(b - median)) {
    return 1;
  }
    
  if (Math.abs(a - median) === Math.abs(b - median) && a > b) {
      return 1;
  }

  return 0;
}