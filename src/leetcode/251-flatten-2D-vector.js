/**
 * @param {number[][]} v
 */
var Vector2D = function(v) {
    this.v = v;
    this.inner = 0;
    this.outer = 0;
};

Vector2D.prototype.advancedToNext = function() {
    while(this.outer < this.v.length && this.inner == this.v[this.outer].length) {
        this.inner = 0;
        this.outer++;
    }
}

/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
    if (!this.hasNext()) {
        return -1;
    }
    
    return this.v[this.outer][this.inner++];
};


Vector2D.prototype.hasNext = function() {
    this.advancedToNext();
    return this.outer < this.v.length;
};

/** 
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(v)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */