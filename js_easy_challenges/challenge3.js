//To convert numbers to numerals work from the left side,
// 1. convert the current number to a numeral, add result to string then move to the next number
// 2. if the current number is a zero move on
// do until last number

class RomanNumeral {
  static NUMERALS = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  constructor(num) {
    this.num = num;
  }

  toRoman() {
    let result = "";
    let numStringArr = this.num.toString().split("").reverse();

    for (let i = numStringArr.length - 1; i >= 0; i -= 1) {
      let curr = numStringArr[i];
      if (curr === "0") continue;
      curr = Number(curr + "0".repeat(i));

      Object.keys(RomanNumeral.NUMERALS)
        .reverse()
        .forEach((numeral) => {
          if (curr >= Number(numeral)) {
            result += RomanNumeral.NUMERALS[numeral].repeat(
              Math.floor(curr / Number(numeral))
            );
            curr -= Number(numeral) * Math.floor(curr / Number(numeral));
          }
        });
    }

    return result;
  }
}

module.exports = RomanNumeral;
