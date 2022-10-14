const sumAll = function(int1, int2) {
  if (int1 < 0 || int2 < 0) {
    return 'ERROR';
  } else if (typeof int1 === 'number' && typeof int2 === 'number') {
    finalSum = 0;
    
    if (int1 < int2) {
      first = int1;
      last = int2;
    } else {
      first = int2;
      last = int1;
    }

    for (i = first; i <= last; i++) {
      finalSum = finalSum + i;
    }

    return finalSum;
  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = sumAll;
