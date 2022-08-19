/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    if (!postorder.length)
        return true;
    let temp = postorder.slice().sort((a, b) => a - b);
    function just(temp, postorder) {
        if (temp.length <= 1 && temp[0] === postorder[0])
            return true;
        let node = postorder.pop();
        let index = temp.indexOf(node);
        if (index === -1)
            return false;
        let posleft = postorder.slice(0, index);
        let templeft = temp.slice(0, index);
        let posright = postorder.slice(index);
        let tempright = temp.slice(index + 1);
        return just(templeft, posleft) && just(tempright, posright)
    }
    return just(temp, postorder);
};