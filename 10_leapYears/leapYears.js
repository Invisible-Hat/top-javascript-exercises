const leapYears = function (year) {
  let boolean = false;
  if (year % 4 === 0 && year % 100 !== 0) boolean = true;
  if (year % 100 === 0 && year % 400 === 0) boolean = true;
  return boolean;
};

// Do not edit below this line
module.exports = leapYears;
