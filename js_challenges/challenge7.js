class Octal {
  constructor(octoNum) {
    this.octoNum = octoNum;
  }

  toDecimal() {
    if (isNaN(this.octoNum) || this.octoNum.search(/[8-9]/) !== -1) return 0;

    let deciNum = 0;

    let counter = 0;
    for (let i = this.octoNum.length - 1; i >= 0; i--) {
      console.log(Number(this.octoNum[i]));
      deciNum += Number(this.octoNum[i]) * Math.pow(8, counter);
      counter++;
    }

    return deciNum;
  }
}

module.exports = Octal;
