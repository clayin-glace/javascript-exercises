const ftoc = function(tempF) { //converts fahrenheit to celsius
let tempC = (tempF - 32) * (5 / 9);
return (Math.round(tempC * 10) / 10);
};

const ctof = function(tempC) { //converts celsius to fahrenheit
let tempF = (tempC * 1.8) + 32;
return (Math.round(tempF * 10) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
