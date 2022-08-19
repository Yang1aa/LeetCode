/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
    this.nums = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    let l = 0;
    let r = this.nums.length;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (num > this.nums[mid]) {
            l = mid + 1
        } else if (num < this.nums[mid]) {
            r = mid - 1
        } else {
            this.nums.splice(mid, 0, num);
            return;
        }
    }
    this.nums.splice(r + 1, 0, num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    const len = this.nums.length;
    const mid = Math.floor(len / 2)
    const res = len % 2 == 0 ? parseFloat((this.nums[mid] + this.nums[mid - 1]) / 2) : parseFloat(this.nums[mid]);
    return res;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */