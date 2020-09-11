/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let result = maxSoFar;
    
    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];    
        let t = Math.max(curr, Math.max(maxSoFar * curr, minSoFar * curr));
        minSoFar = Math.min(minSoFar * curr, Math.min(curr, maxSoFar * curr));
        maxSoFar = t;
        result = Math.max(maxSoFar, result);
    }
    
    return result;
};