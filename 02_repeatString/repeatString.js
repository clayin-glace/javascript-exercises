const repeatString = function(string, num) {
  if (num < 0) {
    return "ERROR";
  } else {
    outputString = ""; //start with empty string

    for (i = 0; i < num; i++) {
      outputString = outputString.concat(string);
    }
  
    return outputString;
    //ex. repeatString("cat", 3) == "catcatcat"
  }


};

// Do not edit below this line
module.exports = repeatString;
