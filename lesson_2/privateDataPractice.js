function makeCounterLogger(startNum) {
  return function (endNum) {
    let currentNum = startNum;
    if (currentNum > endNum) {
      while (currentNum >= endNum) {
        console.log(currentNum);
        currentNum -= 1;
      }
    } else if (currentNum < endNum) {
      while (currentNum <= endNum) {
        console.log(currentNum);
        currentNum += 1;
      }
    } else {
      console.log(currentNum);
    }
  };
}

// let countlog = makeCounterLogger(5);
// countlog(8);

// countlog(2);

function makeList() {
  let list = [];
  return function (command) {
    if (command) {
      if (list.includes(command)) {
        list.splice(list.indexOf(command), 1);
        console.log(`${command} removed!`);
      } else {
        list.push(command);
        console.log(`${command} added!`);
      }
    } else {
      if (list[0]) {
        list.forEach((item) => console.log(item));
      } else {
        console.log("The list is empty!");
      }
    }
  };
}

// let list = makeList();
// list();
// list("make breakfast");
// list("read book");
// list();
// list("make breakfast");
// list();

//IIFEs Practice
// (function (countStart) {
//   while (countStart >= 0) {
//     console.log(countStart);
//     countStart -= 1;
//   }
// })(7);

// let bar = (function (start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// })(2);
// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

// (function countdown(count) {
//   if (count === 0) {
//     console.log(count);
//     return;
//   } else {
//     console.log(count);
//     countdown(count - 1);
//   }
// })(7);

//Shorthand Function Practice
function objMaker(first, second, third, fourth, fifth) {
  return {
    first,

    last: fifth,
  };
}
