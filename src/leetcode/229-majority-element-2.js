/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let answer = []
    let thirds = parseInt(nums.length/3);
    nums.sort()
    for (let i = 0; i < nums.length - thirds; i++) {
        if (answer.includes(nums[i])) continue;
        if (nums[i] === nums[i + thirds]) {
                answer.push(nums[i])
        }
    }
    
    return answer;
};