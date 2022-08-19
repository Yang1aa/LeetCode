var cuttingRope = function (n) {
    if (n <= 3)
        return n - 1;
    let arr = [1, 1, 2, 3]
    const f = (n) => {
        let max = -1;
        for (let j = 4; j <= n; j++) {
            for (let i = 2; i <= Math.floor(j / 2); i++) {
                max = Math.max(j, arr[i] * arr[j - i], max)
            }
            arr.push(max);
        }
    }
    f(n);
    return arr[arr.length - 1];
};