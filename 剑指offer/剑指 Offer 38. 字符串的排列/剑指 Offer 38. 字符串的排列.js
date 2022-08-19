/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    const len = s.length;
    s = s.split('').sort()
    let used = new Array(s.length).fill(false);
    let ans = []
    const dfs = (path) => {
        if (path.length === len) {
            ans.push(path.join(''));
            return;
        }
        for (let i = 0; i < len; i++) {
            if (used[i] || (i > 0 && s[i] == s[i - 1] && !used[i - 1]))
                continue;
            used[i] = true;
            path.push(s[i]);
            dfs(path);
            path.pop();
            used[i] = false;
        }
    }
    dfs([]);
    return ans
};