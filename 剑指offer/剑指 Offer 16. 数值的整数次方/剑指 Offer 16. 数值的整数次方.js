/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function (x, n) {
    let res = 1
    if (n === 0)
        return res;
    else
        res = 1;
    let abs = Math.abs(n);
    while (abs) {
        if (abs % 2 == 1) {
            res = res * x
        }
        x = x * x
        abs = Math.floor(abs / 2);
    }
    return n > 0 ? res : 1 / res;
};