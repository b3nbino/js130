class Cipher {
  static doubleAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  static encode(string) {
    let stringArr = string.split("");
    let cipherString = [];

    stringArr.forEach((letter) => {
      let letterIndex = Cipher.doubleAlphabet.indexOf(letter);

      if (letter.match(/[a-z]/i)) {
        if (letterIndex < 0) {
          letterIndex = Cipher.doubleAlphabet.indexOf(letter.toLowerCase());
        }
        cipherString.push(
          Cipher.doubleAlphabet[Cipher.doubleAlphabet.indexOf(letter) + 13]
        );
      } else {
        cipherString.push(letter);
      }
    });

    return cipherString.join("");
  }
}

module.exports = Cipher;
