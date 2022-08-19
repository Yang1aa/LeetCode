/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = new Map();
    const len = Math.floor(nums.length / 2);
    for (let item of nums) {
        if (map.has(item)) {
            let sum = map.get(item);
            map.set(item, ++sum)
        } else
            map.set(item, 1);
        if (map.get(item) > len)
            return item;
    }
};