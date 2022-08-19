/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let stack = []
    for (const item of pushed) {
        stack.push(item);
        while (popped.length && stack[stack.length - 1] == popped[0]) {
            popped.shift();
            stack.pop();
        }
    }
    return !stack.length
};