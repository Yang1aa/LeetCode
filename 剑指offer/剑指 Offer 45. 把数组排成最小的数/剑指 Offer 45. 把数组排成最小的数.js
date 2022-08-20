/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
    return nums.sort((a, b) => {
        let n1 = '' + a + b;
        let n2 = '' + b + a;
        return n1 - n2
    }).join('');
};
nums = [3, 30, 34, 5, 9]
console.log(minNumber(nums))