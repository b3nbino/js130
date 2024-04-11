//To convert numbers to numerals work from the left side,
// 1. convert the current number to a numeral, add result to string then move to the next number
// 2. if the current number is a zero move on
// do until last number

class RomanNumeral {
  static NUMERALS = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };

  constructor(num) {
    this.num = num;
  }

  toRoman() {
    let result = "";
    let numStringArr = this.num.toString().split("").reverse();

    for (let i = numStringArr.length - 1; i >= 0; i -= 1) {
      let curr = numStringArr[i];
      if (curr === 0) continue;

      let stringNum = "";

      curr = Number(curr + "0".repeat(i));

      while (curr > 0) {
        let remainder;
        if (curr % 1000 === 0) {
          remainder = curr % 1000;
          curr -= 1000 * remainder;
          stringNum += RomanNumeral.NUMERALS[1000].repeat(remainder);
        } else if (curr % 500 === 0) {
          remainder = curr % 500;
          curr -= 500 * remainder;
          stringNum += RomanNumeral.NUMERALS[500];
        } else if (curr % 100 === 0) {
          remainder = curr % 100;
          curr -= 100 * remainder;
          stringNum += RomanNumeral.NUMERALS[100];
        } else if (curr % 50 === 0) {
          remainder = curr % 50;
          curr -= 50 * remainder;
          stringNum += RomanNumeral.NUMERALS[50];
        } else if (curr % 10 === 0) {
          remainder = curr % 10;
          curr -= 10 * remainder;
          stringNum += RomanNumeral.NUMERALS[10];
        } else if (curr % 5 === 0) {
          remainder = curr % 5;
          curr -= 5 * remainder;
          stringNum += RomanNumeral.NUMERALS[5];
        } else if (curr % 1 === 0) {
          remainder = curr % 1;
          curr -= 1 * remainder;
          stringNum += RomanNumeral.NUMERALS[1];
        }
      }

      result += stringNum;
    }

    return result;
  }
}

let number = new RomanNumeral(1024);
console.log(number.toRoman());
