/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    if (!root)
        return;
    let head = null;
    let pre = null;
    const find = (root) => {
        if (!root)
            return;
        find(root.left);
        if (head === null) {
            head = root;
            pre = root;
        } else {
            root.left = pre;
            pre.right = root;
            pre = root;
        }
        find(root.right);
    }
    find(root);
    pre.right = head;
    head.left = pre;
    return head;
};