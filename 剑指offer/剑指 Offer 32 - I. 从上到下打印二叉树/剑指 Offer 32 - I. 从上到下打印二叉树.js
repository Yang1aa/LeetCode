/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    let ans = []
    if (!root)
        return ans;
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (node.left)
                queue.push(node.left)
            if (node.right)
                queue.push(node.right)
            ans.push(node.val);
        }
    }
    return ans;
};