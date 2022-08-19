/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    // < !--如果树有任意一颗为空，题目中说都不符合要求，直接返回false-- >
    if (!A || !B)
        return false;

    // < !--just函数判断两棵树是否相等 -->
    const just = (a, b) => {
        if (!b)                  //(!b)等价于((!a&&!b)||(a&&!b))如果找到叶子结点说明当前路径符合，返回true
            return true;
        if (!a && b || a.val !== b.val)
            return false;        //如果a树为空且b树不为空，或者两个树结点的val不相等说明b不是a不是子树关系，返回false
        return just(a.left, b.left) && just(a.right, b.right);//当所有路径都为true，返回true
    }

    // < !--Map函数用来查询可能是 -->
    const Map = (A) => {
        let arr = [];
        if (!A)
            return arr;          //遇到叶子结点返回空数组
        if (A.val === B.val)
            arr.push(A);         //找到根节点相同的压入数组   
        arr.push(...Map(A.left)) //遍历左子树
        arr.push(...Map(A.right))//遍历右子树
        return arr;
    }
    let nodeArr = Map(A);
    let res = false;
    // < !--如果没找到这个结点，直接返回false-- >
    if (!nodeArr.length)
        return res;
    // < !--遍历nodeArr, 查找子树是否匹配-- >
    nodeArr.map(item => {
        // < !--如果res === true, 就不在更新res-- >
        res = !res ? just(item, B) : res;
    })
    return res;
};