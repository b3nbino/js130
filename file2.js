//file2.js
let { addString, getValues } = require("./file1");

function double(value) {
  return value + value;
}

function concatDouble() {
  return getValues().reduce((result, value) => {
    return result + double(value);
  });
}

module.exports = {
  double,
  concatDouble,
};
