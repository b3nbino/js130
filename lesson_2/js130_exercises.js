function myBind(func, obj, arg1) {
  return function (arg2) {
    func.call(obj, arg1, arg2);
  };
}

// let something = {
//   a: 1,
//   b: 2,
// };

// function doSomething(arg, arg2) {
//   console.log(this.a + this.b + arg + arg2);
// }

// let addFiveToSomething = myBind(doSomething, something, 5);
// addFiveToSomething(5);

function newStack() {
  let stack = [];
  return {
    push(elem) {
      stack.push(elem);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach((elem) => console.log(elem));
    },
  };
}

// let shortStack = newStack();
// shortStack.push(5);
// shortStack.push(11);
// shortStack.push("beans");
// shortStack.printStack();
// console.log(shortStack.pop());
// console.log(shortStack.pop());
// shortStack.printStack();

function delegate(obj, prop, ...args) {
  return function () {
    obj[prop](...args);
  };
}

// let foo = {
//   name: "test",
//   bar: function (greeting, salutation) {
//     console.log(greeting + " " + this.name + " " + salutation);
//   },
// };

// let baz = {
//   qux: delegate(foo, "bar", "hello", "goodbye"),
// };

// baz.qux(); // logs 'hello test';

// foo.bar = function () {
//   console.log("changed");
// };

// baz.qux(); // logs 'changed'
