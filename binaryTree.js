class BinaryTree {
  constructor(num) {
    this.value = num;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeTwo {
  constructor(num) {
    this.root = new BinaryTree(num);
  }

  insert(num) {
    const newNode = new BinaryTree(num);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(now, newNode) {
    if (newNode.num < now.num) {
      if (now.left === null) {
        now.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (now.right === null) {
        now.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}
