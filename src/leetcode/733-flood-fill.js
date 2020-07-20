/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {    
    if (image[sr][sc] == newColor) return image;
    
    let ans = {
        image: image,
    }
    
    fill(ans, sr, sc, image[sr][sc], newColor);

    return ans.image;
};

function fill(ans, r, c, target, newColor) {
    if (r < 0 || r >= ans.image.length || c <0 || c >= ans.image[0].length) {
        return;
    }
    
    if (ans.image[r][c] === target) {
        ans.image[r][c] = newColor;
        
        fill(ans, r + 1, c, target, newColor);
        fill(ans, r - 1, c, target, newColor);
        fill(ans, r, c + 1, target, newColor);
        fill(ans, r, c - 1, target, newColor);
    }
    
    return;
}