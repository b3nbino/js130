// function reduce(array, func, initialValue) {
//   let acc = initialValue;
//   if (acc) {
//     for (let index = 0; index < array.length; index++) {
//       const element = array[index];
//       acc = func(acc, element);
//     }
//     return acc;
//   } else {
//     acc = array[0];
//     for (let index = 1; index < array.length; index++) {
//       const element = array[index];
//       acc = func(acc, element);
//     }
//     return acc;
//   }
// }

function reduce(array, func, initialValue) {
  let acc = initialValue ? initialValue : array[0];
  for (let index = initialValue ? 0 : 1; index < array.length; index++) {
    acc = func(acc, array[index]);
  }
  return acc;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number)); // => 15
console.log(reduce(numbers, (prod, number) => prod * number)); // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3)); // => 360
console.log(reduce([], (accum, number) => accum + number, 10)); // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(
  reduce(
    stooges,
    (reversedStooges, stooge) => {
      reversedStooges.unshift(stooge);
      return reversedStooges;
    },
    []
  )
);
// => ["Curly", "Larry", "Mo"]
