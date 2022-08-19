/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    // 反方向遍历
    // let newRoot = new TreeNode();
    // if (!root)
    //     return root
    // const Map = (root, newRoot) => {
    //     if (!root)
    //         return;
    //     newRoot.val = root.val;
    //     if (root.right)
    //         newRoot.left = new TreeNode()
    //     if (root.left)
    //         newRoot.right = new TreeNode()
    //     Map(root.left, newRoot.right);
    //     Map(root.right, newRoot.left);

    // }
    // Map(root, newRoot);
    // return newRoot;
    //交换左右子树
    if (!root)
        return root;
    [root.left, root.right] = [root.right, root.left]
    mirrorTree(root.left)
    mirrorTree(root.right)
    return root;
};