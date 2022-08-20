/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    if (num < 10)
        return 1;
    num = num.toString();
    let len = num.length;
    let ans = [1, 1]
    for (let i = 2; i <= len; i++) {
        if (+(num[i - 2] + '' + num[i - 1]) > 0 && +(num[i - 2] + '' + num[i - 1]) <= 25 && +num[i - 2] != 0)
            ans.push(ans[i - 2] + ans[i - 1])
        else
            ans.push(ans[i - 1])
    }
    return ans[len];
};