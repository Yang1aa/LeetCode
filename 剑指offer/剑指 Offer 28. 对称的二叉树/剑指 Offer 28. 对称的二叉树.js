/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root)
        return true;
    const just = (a, b) => {
        if (!a && !b)
            return true;
        if ((!a && b) || (a && !b) || (a.val != b.val))
            return false;
        return just(a.left, b.right) && just(a.right, b.left)
    }
    return just(root.left, root.right);

};