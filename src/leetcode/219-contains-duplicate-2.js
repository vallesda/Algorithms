/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let seen = new Set();
    
    if (k === 0) {
        return false;
    }
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        
        if (seen.has(num)) {
            return true;
        }
        
        if (seen.size === k) {
            let offNum = nums[i - k];
            seen.delete(offNum);
        }
        
        seen.add(num);
    }
    
    return false;
};