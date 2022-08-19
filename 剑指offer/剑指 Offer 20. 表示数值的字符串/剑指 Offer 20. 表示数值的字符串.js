/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    s = s.trim().split('');
    const len = s.length;
    let point = false;
    let e = false;
    let op = false;
    let num = false;
    for (let i = 0; i < len; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            num = true;
        } else if (s[i] == '.' && !e && !point) {
            point = true;
        }
        else if ((s[i] === '+' || s[i] === '-') && (i == 0 || s[i - 1].toLowerCase() === 'e')) {
            op = true;
        } else if ((s[i] === 'e' || s[i] === 'E') && !e && num) {
            e = true;
            num = false;
        } else
            return false;
    }
    return num;
    //return /^[+-]?((\d+)|(\d*\.\d+)|(\d+\.))([eE][-+]?\d+)?$/.test(s.trim());
};