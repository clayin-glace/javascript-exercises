const removeFromArray = function(array, ...itemsToRemove) { //handles multiple parameter lengths for itemsToRemove
  for (removal of itemsToRemove) { //for each item to remove
    for (item of array) { //for each item in the array
      if (item === removal) { //check if item needs to be removed
        item.array = array.splice(array.indexOf(item), 1); //remove that item
        //console.log(array);
      }
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
