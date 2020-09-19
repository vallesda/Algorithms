var combinationSum = function(candidates, target) {
    let result = [];
    
    let subarrays = function(position, curr, sum) {
        if (position > candidates.length || sum > target) return;
        
        if (sum === target) {
            result.push(curr.slice());
        }

        for (let i = position; i < candidates.length; i++) {            
            curr.push(candidates[i]);
            subarrays(i, curr, sum + candidates[i]);
            curr.pop();   
        }
    };
    
    subarrays(0, [], 0);
    return result;
};