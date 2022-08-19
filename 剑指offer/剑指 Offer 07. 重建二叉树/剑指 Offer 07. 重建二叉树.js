/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function (preorder, inorder) {
    // 递归返回条件
    if (!preorder.length || !inorder.length) return null;
    // 先序遍历的首元素为根结点，创建节点
    const root = new TreeNode(preorder[0]);
    const rootInIndex = inorder.indexOf(preorder[0]);
    // 用If语句剪枝，减少递归层数（因为创建root时，left right 默认设置为null了，因为不必再设置）
    // 设置左右子节点，递归
    if (rootInIndex !== 0)
        root.left = buildTree(preorder.slice(1, 1 + rootInIndex), inorder.slice(0, rootInIndex));
    if (rootInIndex !== preorder.length - 1)
        root.right = buildTree(preorder.slice(1 + rootInIndex), inorder.slice(rootInIndex + 1))

    return root
};