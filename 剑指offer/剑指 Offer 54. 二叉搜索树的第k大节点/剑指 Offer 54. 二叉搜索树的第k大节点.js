/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
    let ans;
    const find = (root) => {
        if (!root)
            return;
        find(root.right);
        k--;
        if (!k)
            ans = root.val
        find(root.left);
    }
    find(root);
    return ans
};