/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums) {
        return 0;
    }
    
    let largestSum = nums[0];
    let candidate = 0;
    for (currentNum of nums) {
        candidate = Math.max(currentNum, candidate + currentNum);
        largestSum = Math.max(candidate, largestSum);
    }
    
    return largestSum;
};