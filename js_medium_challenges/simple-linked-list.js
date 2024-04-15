"use strict";
class Element {
  constructor(elem, nextElem = null) {
    this.elem = elem;
    this.nextElem = nextElem;
  }

  datum() {
    return this.elem;
  }

  next() {
    return this.nextElem;
  }

  isTail() {
    return this.next() === null;
  }
}

class SimpleLinkedList {
  constructor() {
    this.list = {};
    this.listSize = 0;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(num) {
    this.list[this.size()] = new Element(num, this.list[this.size() - 1]);
    this.listSize += 1;
  }

  pop() {
    let popped = this.list[this.size() - 1];
    this.list[this.size() - 1] = undefined;
    this.listSize -= 1;
    return popped.datum();
  }

  size() {
    return this.listSize;
  }

  peek() {
    return this.size() > 0 ? this.list[this.size() - 1].datum() : null;
  }

  head() {
    return this.list[this.size() - 1];
  }

  static fromArray(arr) {
    if (!arr) return new SimpleLinkedList();

    let newList = new SimpleLinkedList();
    arr = arr.slice().reverse();
    for (let index = 0; index < arr.length; index++) {
      newList.push(arr[index]);
    }

    return newList;
  }

  toArray() {
    let resultArr = [];
    for (let index in this.list) {
      resultArr.push(this.list[index].datum());
    }
    return resultArr.reverse();
  }

  reverse() {
    return SimpleLinkedList.fromArray(this.toArray().reverse());
  }
}

console.log(Array.from({ length: 2, 0: 1, 1: 2 }));

module.exports = { Element, SimpleLinkedList };
