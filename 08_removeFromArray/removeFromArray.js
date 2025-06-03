/* 
    Implement a function that takes an array and 
    some other arguments then 
    removes the other arguments from that array
 */
const removeFromArray = function (arr, ...args) {
  //const filtered = arr.filter((item) => item !== a && item !== b);
  const clearedArray = [];
  arr.forEach((element) => {
    if (!args.includes(element)) clearedArray.push(element);
  });
  return clearedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
