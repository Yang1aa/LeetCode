/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head)
        return head
    let q = head
    while (q) {
        let node = new Node(q.val, q.next, null);
        q.next = node;
        q = q.next.next;
    }
    q = head;
    while (q) {
        if (q.random)
            q.next.random = q.random.next;
        q = q.next.next;
    }
    q = head;
    let newHead = head.next;
    while (q) {
        let p = q.next;
        q.next = p.next;
        p.next = q.next ? q.next.next : null;
        q = q.next;
    }
    return newHead
};