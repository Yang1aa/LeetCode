/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
    let ans = []
    if (!root)
        return ans;
    function search(root, sum, path) {
        if (!root)
            return;
        sum += root.val;
        if (sum == target && !root.left && !root.right) {
            path += root.val + '';
            ans.push(path.split(',').map(Number));
            return;
        } else {
            path += root.val + ',';
        }
        search(root.left, sum, path)
        search(root.right, sum, path)
    }
    search(root, 0, '');
    return ans;
};