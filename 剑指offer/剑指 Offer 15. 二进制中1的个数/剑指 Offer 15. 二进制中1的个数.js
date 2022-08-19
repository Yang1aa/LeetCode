/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function (n) {
    let res = 0;
    let arr = n.toString(2).split('');
    // console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        res += arr[i] !== '0' ? 1 : 0;
    }
    return res
};