class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (node.value < this.value) {
      if (this.left) {
        this.left = new Node(value);
      }
    } else {
      // implemented as in previous challenge
      let current = this.right;
      while (current.right) {
        current = current.right;
      }
      current.right = new Node(value);
    }
  }

  findPerson(name) {
    // Implement me!
  }
}
