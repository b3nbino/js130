class SumOfMultiples {
  constructor(...multiples) {
    this.multiples = multiples.length > 0 ? multiples : [3, 5];
  }

  static to(num) {
    return new SumOfMultiples(3, 5).to(num);
  }

  to(num) {
    let allMultiples = [];

    for (let i = 1; i < num; i++) {
      this.multiples.forEach((multiple) => {
        if (multiple * i < num && !allMultiples.includes(multiple * i)) {
          allMultiples.push(multiple * i);
        }
      });
    }

    return allMultiples.reduce((acc, curr) => acc + curr, 0);
  }
}

module.exports = SumOfMultiples;
