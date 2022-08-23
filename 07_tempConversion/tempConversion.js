const ftoc = function(degrees) {
  let celsius = (degrees - 32) * (5/9);
  return Math.round(celsius*10)/10
};

const ctof = function(degrees) {
  let fahrenheit = (degrees * (1.8) + 32);
  return Math.round(fahrenheit*10)/10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
