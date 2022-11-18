const reverseString = function(string) {
  stringArray = string.split(""); //ex. [s,t,r,i,n,g]
  reversedStringArray = stringArray.reverse(); //ex. [g,n,i,r,t,s]
  reversedString = reversedStringArray.toString(); //ex. "g,n,i,r,t,s"

  return reversedString.replace(/,/g, ""); //ex. "gnirts"
};

// Do not edit below this line
module.exports = reverseString;
