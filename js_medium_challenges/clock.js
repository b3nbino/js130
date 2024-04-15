class Clock {
  constructor(hours, minutes) {
    this.time = 0;
    this.time += 60 * hours;
    this.time += minutes;

    while (this.time < 0) {
      this.time += 60 * 24;
    }
  }

  static at(hours = 0, minutes = 0) {
    return new Clock(hours, minutes);
  }

  isEqual(secondClock) {
    return this.toString() === secondClock.toString();
  }

  add(mins) {
    return new Clock(0, this.time + mins);
  }

  subtract(mins) {
    return new Clock(0, this.time - mins);
  }

  toString() {
    let totalTime = this.time;

    let hoursNow = Math.floor(totalTime / 60);
    let minutesNow = totalTime % 60;
    while (hoursNow > 23) {
      hoursNow -= 24;
    }
    while (hoursNow < 0) {
      hoursNow += 24;
    }

    return `${
      hoursNow.toString().length > 1 ? hoursNow : "0" + hoursNow.toString()
    }:${
      minutesNow.toString().length > 1
        ? minutesNow
        : "0" + minutesNow.toString()
    }`;
  }
}

console.log(Clock.at(8).toString());

module.exports = Clock;
