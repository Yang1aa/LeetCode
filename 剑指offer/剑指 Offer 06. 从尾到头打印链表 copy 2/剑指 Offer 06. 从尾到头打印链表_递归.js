/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function (head) {
    let res = []
    if (!head)
        return res;
    function f(head) {
        if (head) {
            f(head.next)
            res.push(head.val)
        }
    }
    f(head)
    return res;
};