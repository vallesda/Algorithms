/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let l = nums.length;
    if (l < 3) return 0;
    
    nums.sort((a, b) => {return a - b});

    return Math.max((nums[0] * nums[1] * nums[l - 1]), 
                    (nums[l - 1] * nums[l - 2] * nums[l - 3]));
};