class TreeNode<V> {
  key: number;
  left: TreeNode<V> | null;
  right: TreeNode<V> | null;
  val: V;
  color: "red" | "black";
  constructor(key: number, val: V, isRed: boolean) {
    this.key = key;
    this.val = val;
    this.color = isRed ? "red" : "black";
    this.left = null;
    this.right = null;
  }
  static isRed: (x: TreeNode<any> | null) => boolean;
}

TreeNode.isRed = function (node: TreeNode<any> | null) {
  if (!node) {
    return false;
  }
  return node.color === "red";
};

class RBTree<K, V> {
  root: TreeNode<V> | null;

  constructor() {
    this.root = null;
  }

  private rotateLeft(h: TreeNode<V>) {
    // assert TreeNode.isRed(x.right);
    const x = h.right as TreeNode<V>;
    h.right = x.left;
    x.left = h;
    x.color = h.color;
    h.color = "red";
    return x;
  }

  private rotateRight(h: TreeNode<V>) {
    // assert TreeNode.isRed(x.left);
    const x = h.left as TreeNode<V>;
    h.left = x.right;
    x.right = h;
    x.color = h.color;
    h.color = "red";
    return x;
  }

  private flipColors(h: TreeNode<V>) {
    // assert !TreeNode.isRed(h);
    // assert TreeNode.isRed(h.left);
    // assert TreeNode.isRed(h.right);
    h.color = "red";
    (h.left as TreeNode<V>).color = "black";
    (h.right as TreeNode<V>).color = "black";
  }

  get(key: number): V | null {
    let x = this.root;
    while (x !== null) {
      // key.compareTo(x.key)
      const cmp = key - x.key;
      if (cmp < 0) {
        x = x.left;
      } else if (cmp > 0) {
        x = x.right;
      } else {
        return x.val;
      }
    }
    return null;
  }

  private put(h: TreeNode<V> | null, k: number, v: V): TreeNode<V> {
    if (h === null) {
      console.log("create node");
      return new TreeNode(k, v, true);
    }

    const cmp = k - h.key;
    if (cmp < 0) {
      h.left = this.put(h.left, k, v);
    } else if (cmp > 0) {
      h.right = this.put(h.right, k, v);
    } else {
      h.val = v;
    }

    if (TreeNode.isRed(h.right) && !TreeNode.isRed(h.left))
      h = this.rotateLeft(h);
    if (TreeNode.isRed(h.left) && TreeNode.isRed(h.left.left))
      h = this.rotateRight(h);
    if (TreeNode.isRed(h.left) && TreeNode.isRed(h.right)) this.flipColors(h);

    return h;
  }

  insert(k: number, v: V) {
    this.root = this.put(this.root, k, v);
    console.log(this.root);
  }

  batchInsert(entries: Array<[number, V]>) {
    for (const [k, v] of entries) {
      console.log(k, v);
      this.insert(k, v);
    }
  }

  getRoot(): TreeNode<V> | null {
    return this.root;
  }
}

const rbTree = new RBTree<number, string>();
rbTree.batchInsert(
  ["S", "E", "A", "R", "C", "H", "X", "M", "P", "L"].map((c) => [
    c.charCodeAt(0),
    c,
  ])
);
console.log("hello");
debugger;
const r = rbTree.getRoot();

console.log(r);
