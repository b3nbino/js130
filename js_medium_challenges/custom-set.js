class CustomSet {
  constructor(arr = []) {
    this.arr = this.uniqueVals(arr) ? arr : [];
  }

  uniqueVals(arr) {
    let newArr = [];
    arr.forEach((elem) => {
      if (!newArr.includes(elem)) {
        newArr.push(elem);
      }
    });

    return newArr;
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  contains(elem) {
    return this.arr.includes(elem);
  }

  isSubset(otherSet) {
    return this.arr.every((elem) => otherSet.arr.includes(elem));
  }

  isDisjoint(otherSet) {
    return this.arr.every((elem) => !otherSet.arr.includes(elem));
  }

  isSame(otherSet) {
    return (
      this.arr.every((elem) => otherSet.arr.includes(elem)) &&
      otherSet.arr.every((elem) => this.arr.includes(elem))
    );
  }

  add(elem) {
    if (!this.arr.includes(elem)) {
      this.arr.push(elem);
    }
    return this;
  }

  intersection(otherSet) {
    return new CustomSet(
      this.arr.filter((elem) => otherSet.arr.includes(elem))
    );
  }

  difference(otherSet) {
    return new CustomSet(
      this.arr.filter((elem) => !otherSet.arr.includes(elem))
    );
  }

  union(otherSet) {
    let unionizedArr = new CustomSet(this.arr);
    otherSet.arr.forEach((element) => {
      unionizedArr.add(element);
    });

    return unionizedArr;
  }
}

module.exports = CustomSet;
