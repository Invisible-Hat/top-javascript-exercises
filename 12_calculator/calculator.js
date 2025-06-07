const add = function (...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  let sum = 0;
  for (let num of a) {
    sum = sum + num;
  }
  return sum;
};

const multiply = function (arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function (base, power) {
  let product = base;
  for (let i = 1; i < power; i++) {
    product *= base;
  }
  return product;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  }
  let factorial = num;
  for (let i = num - 1; i > 1; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
