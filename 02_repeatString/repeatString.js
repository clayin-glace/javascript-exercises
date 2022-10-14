const repeatString = function(string, num) {
  if (num < 0) {
    return "ERROR";
  } else {
    outputString = "";

    for (i = 0; i < num; i++) {
      outputString = outputString.concat(string);
    }
  
    return outputString;
  }


};

// Do not edit below this line
module.exports = repeatString;
