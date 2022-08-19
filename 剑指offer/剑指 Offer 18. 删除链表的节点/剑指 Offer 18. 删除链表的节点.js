/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function (head, val) {
    let p = head;
    let q = p;
    while (p) {
        if (p.val === val && p === head) {
            head = head.next;
            p.next = null;
            break;
        }
        if (p.val === val) {
            q.next = p.next;
            p.next = null;
            delete p;
            break;
        }
        q = p;
        p = p.next;
    }
    return head;
};