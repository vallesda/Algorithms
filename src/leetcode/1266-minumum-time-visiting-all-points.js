/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let previous = points.shift();
    let answer = 0;
    while (points.length != 0) {
        let next = points.shift();
        answer += movement(previous[0], previous[1], next[0], next[1]);
        previous = next;
    }
    return answer;
};


function movement(x1, y1, x2, y2) {
    let diffX = Math.abs(x2 - x1);
    let diffY = Math.abs(y2 - y1);
    return Math.min(diffX, diffY) + Math.abs(diffX - diffY);
}