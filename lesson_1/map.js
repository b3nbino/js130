function map(array, func) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArray.push(func(element));
  }

  return newArray;
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, (number) => number * 3)); // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, (number) => number + 1)); // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, (value) => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]
