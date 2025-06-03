const sumAll = function (a, b) {
  if (a < 0 || b < 0) return "ERROR";
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  let arr = [];
  const max = a > b ? a : b;
  const min = a > b ? b : a;
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr.reduce((acc, curr) => acc + curr, 0);
};

// Do not edit below this line
module.exports = sumAll;
