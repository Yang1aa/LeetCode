var spiralOrder = function (matrix) {
    let ans = [];
    const Rlen = matrix.length;
    if (Rlen <= 1) {
        if (Rlen === 0)
            return ans;
        ans.push(...matrix[0])
        return ans;
    }
    const Clen = matrix[0].length;
    if (Clen <= 1) {
        if (Clen === 0)
            return ans;
        for (let i = 0; i < Rlen; i++)
            ans.push(matrix[i][0])
        return ans;
    }
    let i = 0;
    let j = 0;
    let count = 1;
    let sum = 0;
    while (sum < Clen * Rlen) {
        let border = Math.floor(count / 4)
        if (count % 4 === 1) {
            for (j; j <= Clen - 1 - border; j++) {
                ans.push(matrix[i][j])
                sum++
            }
            j--;
            i++;
        } else if (count % 4 === 2) {
            for (i; i <= Rlen - 1 - border; i++) {
                ans.push(matrix[i][j])
                sum++
            }
            j--;
            i--;
        } else if (count % 4 === 3) {
            for (j; j >= border; j--) {
                ans.push(matrix[i][j])
                sum++
            }
            i--;
            j++;
        } else {
            for (i; i >= border; i--) {
                ans.push(matrix[i][j])
                sum++
            }
            i++;
            j++;
        }
        count++;
    }
    return ans
};