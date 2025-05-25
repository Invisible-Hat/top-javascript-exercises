const reverseString = function (word) {
  let array = "";
  for (let i = word.length; i >= 0; i--) {
    array += word.charAt(i);
  }
  return array;
};

// Do not edit below this line
module.exports = reverseString;
