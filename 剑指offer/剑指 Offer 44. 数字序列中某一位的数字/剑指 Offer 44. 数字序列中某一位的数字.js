/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    if (n >= 0 && n <= 9)
        return n;
    let x = 1;
    let sum = 10;
    while (sum < n) {
        x++;
        sum += Math.pow(10, x - 1) * 9 * (x)
    }
    sum -= Math.pow(10, x - 1) * 9 * (x)
    let count = Math.floor((n - sum) / x);
    let lost = (n - sum) % x
    return `${Math.pow(10, x - 1) + count}`.charAt(lost)
};