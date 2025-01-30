//main.js
let { addString, getValues } = require("./file1");
let { double, concatDouble } = require("./file2");

addString("a");
addString("bc");
addString("def");
addString("ghij");
console.log(concatDouble()); // => abcbcdefdefghijghij
