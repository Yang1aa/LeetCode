/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function (numbers) {
    let l = 0
    let r = numbers.length - 1;
    while (l <= r) {
        let center = Math.floor((l + r) / 2);
        if (numbers[center] > numbers[r]) {
            l = center + 1;
        } else if (numbers[center] < numbers[r]) {
            r = center;
        } else {
            r--;
        }
    }
    return numbers[l]
};