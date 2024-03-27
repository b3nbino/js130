let RomanNumeral = require("./challenge3.js");

describe("RomanNumeral", () => {
  test("1", () => {
    let number = new RomanNumeral(1);
    expect(number.toRoman()).toBe("I");
  });

  xtest("2", () => {
    let number = new RomanNumeral(2);
    expect(number.toRoman()).toBe("II");
  });

  xtest("3", () => {
    let number = new RomanNumeral(3);
    expect(number.toRoman()).toBe("III");
  });

  xtest("4", () => {
    let number = new RomanNumeral(4);
    expect(number.toRoman()).toBe("IV");
  });

  xtest("5", () => {
    let number = new RomanNumeral(5);
    expect(number.toRoman()).toBe("V");
  });

  xtest("6", () => {
    let number = new RomanNumeral(6);
    expect(number.toRoman()).toBe("VI");
  });

  xtest("9", () => {
    let number = new RomanNumeral(9);
    expect(number.toRoman()).toBe("IX");
  });

  xtest("27", () => {
    let number = new RomanNumeral(27);
    expect(number.toRoman()).toBe("XXVII");
  });

  xtest("48", () => {
    let number = new RomanNumeral(48);
    expect(number.toRoman()).toBe("XLVIII");
  });

  xtest("59", () => {
    let number = new RomanNumeral(59);
    expect(number.toRoman()).toBe("LIX");
  });

  xtest("93", () => {
    let number = new RomanNumeral(93);
    expect(number.toRoman()).toBe("XCIII");
  });

  xtest("141", () => {
    let number = new RomanNumeral(141);
    expect(number.toRoman()).toBe("CXLI");
  });

  xtest("163", () => {
    let number = new RomanNumeral(163);
    expect(number.toRoman()).toBe("CLXIII");
  });

  xtest("402", () => {
    let number = new RomanNumeral(402);
    expect(number.toRoman()).toBe("CDII");
  });

  xtest("575", () => {
    let number = new RomanNumeral(575);
    expect(number.toRoman()).toBe("DLXXV");
  });

  xtest("911", () => {
    let number = new RomanNumeral(911);
    expect(number.toRoman()).toBe("CMXI");
  });

  xtest("1024", () => {
    let number = new RomanNumeral(1024);
    expect(number.toRoman()).toBe("MXXIV");
  });

  xtest("3000", () => {
    let number = new RomanNumeral(3000);
    expect(number.toRoman()).toBe("MMM");
  });
});
