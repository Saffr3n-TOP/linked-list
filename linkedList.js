class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const node = new ListNode(value);

    if (this.size === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.size++;
  }

  prepend(value) {
    const node = new ListNode(value);

    if (this.size === 0) {
      this.tail = node;
    } else {
      node.next = this.head;
    }

    this.head = node;
    this.size++;
  }

  at(index) {
    let node = this.head;
    if (!node || index >= this.size) return null;

    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }

  pop() {
    if (this.size === 0) return;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const node = this.at(this.size - 2);
      node.next = null;
      this.tail = node;
    }

    this.size--;
  }

  contains(value) {
    let node = this.head;

    for (let i = 0; i < this.size; i++) {
      if (node.value === value) return true;
      node = node.next;
    }

    return false;
  }

  find(value) {
    let node = this.head;

    for (let i = 0; i < this.size; i++) {
      if (node.value === value) return i;
      node = node.next;
    }

    return null;
  }

  toString() {
    let string = "";
    let node = this.head;

    for (let i = 0; i < this.size; i++) {
      string += `( ${node.value} )`;
      node = node.next;
      if (i < this.size - 1) string += " -> ";
    }

    return string;
  }

  insertAt(value, index) {
    if (index > this.size) return;

    const newNode = new ListNode(value);

    if (index === 0) {
      this.prepend(newNode);
    } else if (index === this.size) {
      this.append(newNode);
    } else {
      const prevNode = this.at(index - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    }

    this.size++;
  }

  removeAt(index) {
    if (!this.size || index >= this.size) return;

    if (index === 0) {
      this.head = this.head.next;
    } else if (index === this.size - 1) {
      this.pop();
    } else {
      const prevNode = this.at(index - 1);
      prevNode.next = prevNode.next.next;
    }

    this.size--;
  }
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
