"use strict";

class Robot {
  static names = [];

  name() {
    if (this.myName) {
      return this.myName;
    } else {
      this.myName = Robot.generateName();
      Robot.names.push(this.myName);
      return this.myName;
    }
  }

  reset() {
    let previousName = this.myName;
    this.myName = Robot.generateName();
    Robot.names.splice(Robot.names.indexOf(previousName), 1);
    Robot.names.push(this.myName);
  }

  static generateName() {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let string = "";
    let randInt = Math.floor(Math.random() * 26);

    //Add letters
    string += letters[randInt];
    randInt = Math.floor(Math.random() * 26);
    string += letters[randInt];

    //Add numbers
    randInt = Math.floor(Math.random() * 9);
    string += randInt.toString();
    randInt = Math.floor(Math.random() * 9);
    string += randInt.toString();
    randInt = Math.floor(Math.random() * 9);
    string += randInt.toString();

    if (Robot.names.includes(string)) {
      string = Robot.generateName();
    }
    return string;
  }
}

let myRob = new Robot();
console.log(myRob.name());
module.exports = Robot;
