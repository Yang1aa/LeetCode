/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function (head, k) {
    let res = [];
    while (head) {
        res.push(head);
        head = head.next;
    }
    return res[res.length - k];
};