function foreach(arr, func, thisArg) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    func.call(thisArg, element, index, arr);
  }
}

["a", "b", "c"].forEach(function (value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});
