/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {    
    let stack = new Array();
    
    for (par of s) {
       if (isStart(par)) {
           stack.push(par);
       } else {
           if (stack.length === 0) {
               return false;
           }
           
           let top = stack.pop();
           
           if (top !== '(' &&  par === ')') {
               return false;
           } else if (top !== '{' && par === '}' ) {
               return false;
           } else if (top !== '[' && par === ']') {
               return false;
           }
       }
    }
    
    return stack.length === 0;
};
    
function isStart(p) {
    return ('(' === p || '{' === p || '[' === p);
}