const removeFromArray = function(array, ...itemsToRemove) {

  for (removal of itemsToRemove) {
    for (item of array) {
      if (item === removal) {
        item.array = array.splice(array.indexOf(item), 1);
        console.log(array);
      }
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
