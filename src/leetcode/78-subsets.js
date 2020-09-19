/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]]; // initial state
    if (!nums.length) return result;

    let generate = function() {        
        for (let i = 0; i < nums.length; i++) {          
            let l = result.length;
            for (let j = 0; j < l; j++) {
                let c = result[j].slice();
                c.push(nums[i]);
                result.push(c);
            }   
        }
    }
    
    generate();
    
    return result;
};