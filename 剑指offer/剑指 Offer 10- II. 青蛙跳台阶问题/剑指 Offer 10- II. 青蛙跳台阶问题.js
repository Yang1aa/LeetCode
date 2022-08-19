/**
 * @param {number} n
 * @return {number}
 */
 var numWays = function (n) {
    let arr = [1, 1]
    for (let i = 2; i <= n; i++) {
        arr.push((arr[i - 2] + arr[i - 1]) % (1e9 + 7))
    }
    return arr[n];
};