/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size
    this.Q = [];
    this.totalSum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.Q.length === this.size) {
        this.totalSum -= this.Q.shift();
    }
    this.Q.push(val);
    this.totalSum += val;
    return this.totalSum / this.Q.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */