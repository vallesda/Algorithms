/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    nums.sort((a, b) => {
        return a - b
    });
    
    let answer = [];
    
    for (let i = 0; i < nums.length - 1; i++) {
        let start = i + 1;
        let end = nums.length - 1;
        
        while ( start < end ) {
            let sum = nums[start] + nums[end] + nums[i];
            if (sum === 0) {
                answer.push([nums[i], nums[start], nums[end]]);
                while( start < end && nums[start] === nums[start + 1] ) {
                    start++;
                }
                start++;
            } else if (sum > 0) {
                while( start < end && nums[end] === nums[end - 1] ) {
                    end--;
                }
                end--;
            } else {
                while( start < end && nums[start] === nums[start + 1] ) {
                    start++;
                }
                start++;
            }
        }
        
        while(i < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }
    }
    
    return answer;
    
};