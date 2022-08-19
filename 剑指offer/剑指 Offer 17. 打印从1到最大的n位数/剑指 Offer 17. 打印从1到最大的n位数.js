/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function (n) {
    let res = []
    const len = Math.pow(10,n) - 1;
    for (let i = 0; i < len; i++) {
        res.push(i + 1)
    }
    return res
};