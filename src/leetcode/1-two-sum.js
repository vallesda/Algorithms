/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let directoryOfSeenNumbers = new Map();
     
    for (let i = 0; i < nums.length; i++) {
        let number = nums[i];
        let complement = target - number;
        
        if (directoryOfSeenNumbers.has(complement)) {
            let cIndex = directoryOfSeenNumbers.get(complement);
            return [cIndex, i];
        }
        
        directoryOfSeenNumbers.set(number, i);
    }
    
    return [-1, -1];
};