var serialize = function (root) {
    if (!root)
        return 'X';
    const left = serialize(root.left)
    const right = serialize(root.right)
    return root.val + ',' + left + ',' + right;
};
var deserialize = function (data) {
    data = data.split(',');
    function build(data) {
        let node = data.shift()
        if (node == 'X')
            return null;
        let tree = new TreeNode(node);
        tree.left = build(data);
        tree.right = build(data);
        return tree;
    }
    return build(data)
};
