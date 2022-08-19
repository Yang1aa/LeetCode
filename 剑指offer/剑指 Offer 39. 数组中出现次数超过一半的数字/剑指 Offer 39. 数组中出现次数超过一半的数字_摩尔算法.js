/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let res = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!count) {
            count++;
            res = nums[i]
        } else {
            count += nums[i] === res ? 1 : -1;
        }
    }
    return res;
};