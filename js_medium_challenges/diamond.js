class Diamond {
  static makeDiamond(letter) {
    if (letter === "A") return "A\n";

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let diamondString = "";
    let letterIndex = alphabet.indexOf(letter);
    let spacing = 1; //Var for determining spacing between letters

    //Adds the first line
    diamondString +=
      " ".repeat(letterIndex) + "A" + " ".repeat(letterIndex) + "\n";

    //Adds lines after "A" until input letter
    for (let i = 1; i <= letterIndex; i++) {
      diamondString +=
        " ".repeat(letterIndex - i) +
        `${alphabet.charAt(i)}` +
        " ".repeat(spacing) +
        `${alphabet.charAt(i)}` +
        " ".repeat(letterIndex - i) +
        "\n";

      spacing += 2; //Increase space between letters each iteration
    }
    spacing -= 2; //Decrease spacing because we dont want another line with input letter
    //Adds lines after input letter, until "A" exclusive
    for (let i = letterIndex - 1; i > 0; i--) {
      spacing -= 2;
      diamondString +=
        " ".repeat(letterIndex - i) +
        `${alphabet.charAt(i)}` +
        " ".repeat(spacing) +
        `${alphabet.charAt(i)}` +
        " ".repeat(letterIndex - i) +
        "\n";
    }
    //Adds final "A" line
    diamondString +=
      " ".repeat(letterIndex) + "A" + " ".repeat(letterIndex) + "\n";

    return diamondString;
  }
}

module.exports = Diamond;
