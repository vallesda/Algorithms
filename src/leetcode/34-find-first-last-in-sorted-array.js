/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ans = [-1, -1];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (ans[0] === -1) {
                ans[0] = i;
            }
            ans[1] = i;
        }
    }
    return ans;
};