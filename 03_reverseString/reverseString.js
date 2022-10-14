const reverseString = function(string) {
  stringArray = string.split("");
  reversedStringArray = stringArray.reverse();
  reversedString = reversedStringArray.toString();

  return reversedString.replace(/,/g, ""); //removes all ','
};

// Do not edit below this line
module.exports = reverseString;
