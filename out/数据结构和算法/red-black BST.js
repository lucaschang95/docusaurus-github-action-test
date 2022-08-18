var TreeNode = /** @class */ (function () {
    function TreeNode(key, val, isRed) {
        this.key = key;
        this.val = val;
        this.color = isRed ? "red" : "black";
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
TreeNode.isRed = function (node) {
    if (!node) {
        return false;
    }
    return node.color === "red";
};
var RBTree = /** @class */ (function () {
    function RBTree() {
        this.root = null;
    }
    RBTree.prototype.rotateLeft = function (h) {
        // assert TreeNode.isRed(x.right);
        var x = h.right;
        h.right = x.left;
        x.left = h;
        x.color = h.color;
        h.color = "red";
        return x;
    };
    RBTree.prototype.rotateRight = function (h) {
        // assert TreeNode.isRed(x.left);
        var x = h.left;
        h.left = x.right;
        x.right = h;
        x.color = h.color;
        h.color = "red";
        return x;
    };
    RBTree.prototype.flipColors = function (h) {
        // assert !TreeNode.isRed(h);
        // assert TreeNode.isRed(h.left);
        // assert TreeNode.isRed(h.right);
        h.color = "red";
        h.left.color = "black";
        h.right.color = "black";
    };
    RBTree.prototype.get = function (key) {
        var x = this.root;
        while (x !== null) {
            // key.compareTo(x.key)
            var cmp = key - x.key;
            if (cmp < 0) {
                x = x.left;
            }
            else if (cmp > 0) {
                x = x.right;
            }
            else {
                return x.val;
            }
        }
        return null;
    };
    RBTree.prototype.put = function (h, k, v) {
        if (h === null) {
            console.log("create node");
            return new TreeNode(k, v, true);
        }
        var cmp = k - h.key;
        if (cmp < 0) {
            h.left = this.put(h.left, k, v);
        }
        else if (cmp > 0) {
            h.right = this.put(h.right, k, v);
        }
        else {
            h.val = v;
        }
        if (TreeNode.isRed(h.right) && !TreeNode.isRed(h.left))
            h = this.rotateLeft(h);
        if (TreeNode.isRed(h.left) && TreeNode.isRed(h.left.left))
            h = this.rotateRight(h);
        if (TreeNode.isRed(h.left) && TreeNode.isRed(h.right))
            this.flipColors(h);
        return h;
    };
    RBTree.prototype.insert = function (k, v) {
        this.root = this.put(this.root, k, v);
        console.log(this.root);
    };
    RBTree.prototype.batchInsert = function (entries) {
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var _a = entries_1[_i], k = _a[0], v = _a[1];
            console.log(k, v);
            this.insert(k, v);
        }
    };
    RBTree.prototype.getRoot = function () {
        return this.root;
    };
    return RBTree;
}());
var rbTree = new RBTree();
rbTree.batchInsert(["S", "E", "A", "R", "C", "H", "X", "M", "P", "L"].map(function (c) { return [
    c.charCodeAt(0),
    c,
]; }));
console.log("hello");
debugger;
var r = rbTree.getRoot();
console.log(r);
//# sourceMappingURL=red-black%20BST.js.map