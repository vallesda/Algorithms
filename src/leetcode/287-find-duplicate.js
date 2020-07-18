/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    if (!nums || !nums.length) {
        return 0;
    }
    
    let t = nums[0];
    let h = nums[0];
    
    do {
        t = nums[t];
        h = nums[nums[h]];
    } while (t != h);
    
    h = nums[0];
    
    while (t != h) {
        t = nums[t];
        h = nums[h];
    }
    
    return h;
};