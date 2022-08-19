/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let ans = []
    if (!root)
        return ans;
    let queue = [root];
    let count = 0;
    while (queue.length) {
        let len = queue.length;
        let temp = [];
        count++;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right)
            temp.push(node.val);
        }
        if (count % 2 === 0)
            temp = temp.reverse();
        ans.push(temp);
    }
    return ans
};