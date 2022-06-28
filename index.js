class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    this.head = new Node(val);
  }

  add(val) {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(val);
  }
  removeTail() {
    let before = this.head;
    let current = this.head.next;
    while (current.next) {
      before = current;
      current = current.next;
    }
    before.next = null;
  }

  getList() {
    const listArr = [];
    let current = this.head;
    while (current.next) {
      listArr.push(current.val);
      current = current.next;
    }
    listArr.push(current.val);
    return listArr;
  }
}

const list = new LinkedList("A");
console.log(list.head);
list.add("B");
console.log(list.getList());
list.add("C");
console.log(list.getList());
list.removeTail("C");
console.log(list.getList());

module.exports = { LinkedList };
