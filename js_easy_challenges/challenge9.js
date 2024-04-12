class BeerSong {
  static verse(bottleAmount) {
    return bottleAmount > 0
      ? `${bottleAmount > 0 ? bottleAmount : "No more"} ${
          bottleAmount === 1 ? "bottle" : "bottles"
        } of beer on the wall, ${bottleAmount > 0 ? bottleAmount : "no more"} ${
          bottleAmount === 1 ? "bottle" : "bottles"
        } of beer.\n` +
          `Take ${bottleAmount === 1 ? "it" : "one"} down and pass it around, ${
            bottleAmount - 1 > 0 ? bottleAmount - 1 : "no more"
          } ${bottleAmount - 1 === 1 ? "bottle" : "bottles"} of beer ` +
          `on the wall.\n`
      : "No more bottles of beer on the wall, no more " +
          "bottles of beer.\nGo to the store and buy some " +
          "more, 99 bottles of beer on the wall.\n";
  }

  static verses(start, end) {
    let song = [];

    for (let i = start; i >= end; i--) {
      song.push(this.verse(i));
    }

    return song.join("\n");
  }

  static lyrics() {
    return this.verses(99, 0);
  }
}

module.exports = BeerSong;
