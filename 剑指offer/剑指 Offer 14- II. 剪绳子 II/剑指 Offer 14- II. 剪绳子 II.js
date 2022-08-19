/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function (n) {
    if (n === 2)
        return 1;
    if (n === 3)
        return 2
    let arr = [BigInt(0), BigInt(1), BigInt(2), BigInt(3)]
    for (let j = 4; j <= n; j++) {
        let max = BigInt(-1);
        for (let i = 1; i <= Math.floor(j / 2); i++) {
            max = Max(max, BigInt(arr[i] * arr[j - i]));
        }
        arr.push(max)
    }
    return arr[n] % (1000000007n);

};
const Max = (...res) => res.reduce((pre, current) => pre > current ? pre : current)