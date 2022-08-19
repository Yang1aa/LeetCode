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
    let q = head;
    while (q) {
        // let pre = q;
        res.push(q.val)
        q = q.next;
    }
    return res.reverse();

};

