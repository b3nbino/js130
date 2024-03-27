class RomanNumeral {
  static NUMERALS = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    5: "V",
    1: "I",
  };

  constructor(num) {
    this.num = num;
  }

  toRoman() {
    let foo = this.num;
    let string = "";

    while (foo > 0) {
      if (foo >= 1000) {
        string += RomanNumeral.NUMERALS[1000];
        foo -= 1000;
      } else if (foo >= 500) {
        string += RomanNumeral.NUMERALS[500];
        foo -= 500;
      } else if (foo >= 100) {
        string += RomanNumeral.NUMERALS[100];
        foo -= 100;
      } else if (foo >= 50) {
        string += RomanNumeral.NUMERALS[50];
        foo -= 50;
      } else if (foo >= 10) {
        string += RomanNumeral.NUMERALS[10];
        foo -= 10;
      } else if (foo >= 5) {
        string += RomanNumeral.NUMERALS[5];
        foo -= 5;
      } else if (foo >= 1) {
        string += RomanNumeral.NUMERALS[1];
        foo -= 1;
      }
    }
    return string;
  }
}

let foo = new RomanNumeral(1990);
let bar = new RomanNumeral(2008);
console.log(foo.toRoman());
console.log(bar.toRoman());
