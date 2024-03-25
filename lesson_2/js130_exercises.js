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

function makeAccount() {
  let userFirst;
  let userLast;
  let userEmail;
  let userPassword;

  function anonymize() {
    let chars = "abcdefghijklmopqrstuvwxyz0123456789";
    let randomCharIndex = Math.floor(Math.random() * 35);
    let name = chars[randomCharIndex];

    for (let index = 1; index < 16; index++) {
      randomCharIndex = Math.floor(Math.random() * 35);
      name += chars[randomCharIndex];
    }

    return name;
  }

  function validPassword(password) {
    return password === userPassword;
  }

  return {
    init(email, password, first, last) {
      userFirst = first;
      userLast = last;
      userEmail = email;
      userPassword = password;
      this.displayName = anonymize();
      return this;
    },

    reanonymize(pass) {
      if (validPassword(pass)) {
        this.displayName = anonymize();
      } else {
        return "Invalid password";
      }
    },

    resetPassword(pass, newPass) {
      if (validPassword(pass)) {
        userPassword = newPass;
        return true;
      } else {
        return "Invalid password";
      }
    },

    firstName(pass) {
      if (validPassword(pass)) {
        return userFirst;
      } else {
        return "Invalid password";
      }
    },

    lastName(pass) {
      if (validPassword(pass)) {
        return userLast;
      } else {
        return "Invalid password";
      }
    },

    email(pass) {
      if (validPassword(pass)) {
        return userEmail;
      } else {
        return "Invalid password";
      }
    },
  };
}

let Account = makeAccount();
let fooBar = Object.create(Account).init("foo@bar.com", "123456", "foo", "bar");
console.log(fooBar.firstName); // returns the firstName function
console.log(fooBar.email); // returns the email function
console.log(fooBar.firstName("123456")); // logs 'foo'
console.log(fooBar.firstName("abc")); // logs 'Invalid Password'
console.log(fooBar.displayName); // logs 16 character sequence
console.log(fooBar.resetPassword("123", "abc")); // logs 'Invalid Password';
console.log(fooBar.resetPassword("123456", "abc")); // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize("abc"); // returns true
console.log(displayName === fooBar.displayName); // logs false
