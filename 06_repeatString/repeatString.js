const repeatString = function (word, count) {
  if (count == -1) return "ERROR";
  let output = "";
  for (let i = 0; i < count; i++) {
    output += word;
  }
  return output;
};

// Do not edit below this line
module.exports = repeatString;
