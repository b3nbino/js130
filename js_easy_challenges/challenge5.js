class Scrable {
  static letterScores = {
    aeiournlst: 1,
    dg: 2,
    bcmp: 3,
    fhvwy: 4,
    k: 5,
    jx: 8,
    qz: 10,
  };

  constructor(word) {
    this.word = word ? word.toLowerCase() : "";
  }

  static score(convenientWord) {
    let scoredWord = convenientWord;
    let currScore = 0;
    for (let i = 0; i < scoredWord.length; i++) {
      let currLetter = scoredWord[i];
      for (let prop in Scrable.letterScores) {
        if (prop.includes(currLetter)) {
          currScore += Scrable.letterScores[prop];
          // break;
        }
      }
    }

    return currScore;
  }

  score() {
    let scoredWord = this.word;
    let currScore = 0;
    for (let i = 0; i < scoredWord.length; i++) {
      let currLetter = scoredWord[i];
      for (let prop in Scrable.letterScores) {
        if (prop.includes(currLetter)) {
          currScore += Scrable.letterScores[prop];
          // break;
        }
      }
    }

    return currScore;
  }
}

module.exports = Scrable;
