class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(anagramArr) {
    let letters;
    let newArr = anagramArr.filter((anagram) => {
      letters = this.word.toLowerCase().split("");
      let lowAnagram = anagram.toLowerCase().split("");
      if (
        anagram.length === letters.length &&
        lowAnagram.every((letter) => {
          if (letters.includes(letter)) {
            letters.splice(letters.indexOf(letter), 1);
            return true;
          } else {
            return false;
          }
          return;
        }) &&
        this.word.toLowerCase() !== anagram.toLowerCase()
      ) {
        return true;
      }
      return false;
    });

    return newArr;
  }
}

module.exports = Anagram;
