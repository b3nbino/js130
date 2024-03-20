function makeMultipleLister(num) {
  return function () {
    let multiple = num;
    do {
      console.log(multiple);
      multiple += num;
    } while (multiple < 100);
  };
}

// let lister = makeMultipleLister(17);
// lister();

let total = 0;

function add(num) {
  total += num;
  console.log(total);
}

function subtract(num) {
  total -= num;
  console.log(total);
}

// add(1); // 1
// add(42); // 43
// subtract(39); // 4
// add(6); // 10

function later(func, arg) {
  return function () {
    func(arg);
  };
}

// const logger = (message) => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

function later2(func, arg) {
  return function (secArg) {
    func(arg, secArg);
  };
}

const notify = function (message, when) {
  console.log(`${message} in ${when} minutes!`);
};

// let shutdownWarning = later2(notify, "The system is shutting down");
// shutdownWarning(30); // The system is shutting down in 30 minutes!

function bind(obj, func) {
  return function () {
    func.call(obj);
  };
}

("use strict");

let obj = {};
let boundFunc = bind(obj, function () {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }
