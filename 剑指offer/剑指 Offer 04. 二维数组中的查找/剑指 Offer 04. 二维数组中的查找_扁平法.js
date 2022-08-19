/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 二分
 var findNumberIn2DArray = function (matrix, target) {
    const rowlen = matrix.length;
    if (rowlen <= 0) {
        return false;
    }
    let collen = matrix[0].length - 1;
    let i = 0;
    while (i < rowlen && collen >= 0) {
        if (target > matrix[i][collen]) {
            i++;
        } else if (target < matrix[i][collen]) {
            collen--;
        } else
            return true;
    }
    return false;
};