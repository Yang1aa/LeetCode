/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head)
        return head;
    let p = head.next;
    let res = head;
    while (p) {
        head.next = p.next;
        p.next = res;
        res = p;
        p = head.next;
    }
    head.next = null;
    return res;
};