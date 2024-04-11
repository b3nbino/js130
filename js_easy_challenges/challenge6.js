class PerfectNumber {
  static classify(num) {
    if (num < 0) throw new Error();

    let aliqout = 0;

    for (let i = 0; i <= num / 2; i++) {
      if (num % i === 0) {
        aliqout += i;
      }
    }

    if (aliqout === num) {
      return "perfect";
    } else if (aliqout < num) {
      return "deficient";
    } else {
      return "abundant";
    }
  }
}

module.exports = PerfectNumber;
