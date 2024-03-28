class Series {
  constructor(nums) {
    this.nums = nums.split("").map((num) => Number(num));
  }

  slices(sliceLength) {
    if (sliceLength > this.nums.length) throw new Error();

    let slicesArr = [];

    for (let start = 0; start <= this.nums.length - sliceLength; start++) {
      slicesArr.push(this.nums.slice(start, start + sliceLength));
    }

    return slicesArr;
  }
}

module.exports = Series;
