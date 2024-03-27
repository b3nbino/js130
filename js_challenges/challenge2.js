class DNA {
  constructor(dnaSequence) {
    this.dnaSequence = dnaSequence;
  }

  hammingDistance(secondSequence) {
    let [strand1, strand2] = [this.dnaSequence, secondSequence].sort(
      (a, b) => a.length - b.length
    );
    console.log(strand1);
    console.log(strand2);
    let distance = 0;

    for (let i = 0; i < strand1.length; i++) {
      if (strand1[i] !== strand2[i]) {
        distance += 1;
      }
    }

    return distance;
  }
}

module.exports = DNA;
