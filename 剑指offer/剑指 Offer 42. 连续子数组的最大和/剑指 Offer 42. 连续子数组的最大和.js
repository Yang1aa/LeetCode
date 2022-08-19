/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const len = nums.length;
    let max = nums[0];
    for (let i = 1; i < len; i++) {
        if (nums[i] + nums[i - 1] > nums[i]) {
            nums[i] = nums[i] + nums[i - 1]
        }
        max = Math.max(max, nums[i]);
    }
    return max;
};